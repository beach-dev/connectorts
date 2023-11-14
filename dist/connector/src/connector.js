"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const async_mutex_1 = require("async-mutex");
const config_1 = require("../../config/config");
const manifest_1 = require("./manifest");
const types_1 = require("../../kafkautils/src/types");
const consumer_1 = require("../../kafkautils/src/consumer");
const producer_1 = require("../../kafkautils/src/producer");
const message_1 = require("../../kafkautils/src/message");
const topic_1 = require("../../kafkautils/src/topic");
const client_1 = require("../../protoregistry/src/client");
const proto_1 = require("../../protoregistry/src/proto");
class Connector {
    constructor(config, env, kafkaUrl, manifest, rpcs, protoRegistryHost) {
        this._config = config;
        this.env = env;
        this.manifest = manifest;
        this.kafkaUrl = kafkaUrl;
        this.protoRegistryHost = protoRegistryHost;
        this._RPCs = rpcs;
        this._mutex = new async_mutex_1.Mutex();
    }
    /**
     * create() builds a new Connector instance.
     *
     * @param options functions to apply to connector instance
     * @returns new connector instance
     */
    static create(...options) {
        let conf = (0, config_1.getConfig)();
        let c = new Connector(conf, conf.kafka.env, conf.kafka.url, (0, manifest_1.loadManifest)(), conf.rpcs, conf.protoregistry.host || "http://localhost:9191");
        this.parseOptions(c, ...options);
        if (!c.manifest) {
            throw new Error('missing manifest.yaml');
        }
        return c;
    }
    /**
     * parseOption() applies custom functions to the Connector instance.
     *
     * @param connector connector instance
     * @param options functions to apply to the connector instance
     */
    static parseOptions(connector, ...options) {
        for (let option of options) {
            option(connector);
        }
    }
    /**
     * withManifest() returns a function that will be applied manually to Connector instance.
     * @param manifest connector metadata
     * @returns function to be applied to connector
     */
    static withManifest(manifest) {
        return (c) => {
            c.manifest = manifest;
        };
    }
    /**
     * id() returns a unique id for this Connector instance, based on the manifest.
     * @returns Connector ID string
     */
    id() {
        return `${this.manifest.author}-${this.manifest.name}-${this.manifest.version}-${this.env}`;
    }
    get RPCs() {
        return this._RPCs;
    }
    get config() {
        return this._config;
    }
    /**
     * generateTopicFromProto generates message queue topic names based on the protobuf message.
     * Event names should be prefixed with contract_ or category_ when appropriate.
     *
     * @param msgType kafkautils message type
     * @param msg  protobuf message
     * @returns Topic object
     */
    generateTopicFromProto(msgType, msg) {
        return new topic_1.Topic(this.env, msgType, this.manifest.author, this.manifest.name, this.manifest.version, msg);
    }
    /**
     * registerProtos generates kafka topic and protobuf type mappings from proto.Message and registers them dynamically.
     * @param protoPath path to folder containing .proto file
     * @param msgType kafkautils message type
     * @param protos protocol buffer definitions
     * @returns
     */
    registerProtos(protoPath, msgType, ...protos) {
        if (this.env == types_1.Env.DEV) {
            console.log("protoregistry is disabled in dev mode, set kafka.env to other values (e.g., test, staging) to enable it");
            return;
        }
        //  Create protobuf descriptor files which will later be sent to protoregistry
        (0, proto_1.createDescriptorFiles)(protoPath);
        let tts = {};
        for (let proto of protos) {
            let topic = this.generateTopicFromProto(msgType, proto);
            tts[topic.schema()] = proto;
            console.debug(`registering ${topic.toString()}`);
        }
        try {
            (0, client_1.registerDynamicTopics)(this.protoRegistryHost, tts, msgType, protoPath);
        }
        catch (e) {
            console.error("failed to register topics. error: " + e);
        }
    }
    /**
     * startProducer() creates a new kafka producer instance.
     */
    async startProducer() {
        console.log("initializing kafka producer. transactionID: ", this.id());
        this.producer = (0, producer_1.newProducer)(this.kafkaUrl, this.id());
        await this.producer.connect();
    }
    /**
     * produceMessages() wraps incoming messages with a kafka transaction and sends them to kafka.
     *
     * @param msgType kafkautils message type
     * @param messages messages to be pushed to kafka
     */
    async produceMessages(msgType, messages) {
        if (!this.producer)
            await this.startProducer();
        let release = await this._mutex.acquire();
        let messageBatch = {};
        for (let msg of messages) {
            let topic = this.generateTopicFromProto(msgType, msg).toString();
            try {
                let kafkaMsg = new message_1.KafkaMessage(Buffer.from(msg.toBinary()));
                if (!messageBatch[topic]) {
                    messageBatch[topic] = {
                        topic: topic,
                        messages: [kafkaMsg]
                    };
                }
                else {
                    messageBatch[topic].messages.push(kafkaMsg);
                }
            }
            catch (e) {
                console.error("failed to create Kafka message. error: " + e);
            }
        }
        let topicMessages = Object.values(messageBatch).map((item) => {
            console.debug(`delivered ${item.messages.length} message(s) to topic ${item.topic}`);
            return {
                topic: item.topic,
                messages: item.messages
            };
        });
        let producerBatch = {
            topicMessages: topicMessages
        };
        const transaction = await this.producer?.transaction();
        try {
            await transaction?.sendBatch(producerBatch);
            await transaction?.commit();
            console.debug("commited messages ");
        }
        catch (e) {
            console.error("failed to commit messages. error: " + e);
            await transaction?.abort();
        }
        release();
    }
    /**
     * startConsumer() creates a new kafka consumer instance.
     *
     * @param overrideOpts a dict to override default kafka consumer options
     */
    async startConsumer(overrideOpts) {
        console.log("initializing kafka producer. groupID: ", this.id());
        this.consumer = (0, consumer_1.newConsumer)(this.kafkaUrl, this.id(), overrideOpts);
    }
    /**
     * subscribe() subscribes the connector to given kafka topics and
     * applies the provided function to each incoming message.
     *
     * @param topics kafka topics to subscribe to
     * @param fn a function to apply to each message
     * @param overrideOpts a dict to override default kafka consumer options
     */
    async subscribe(topics, fn, overrideOpts) {
        if (!this.consumer)
            await this.startConsumer(overrideOpts);
        await this.consumer?.subscribe({ topics: topics.map(a => { return a.toString(); }) });
        await this.consumer?.run({
            eachBatchAutoResolve: true,
            eachBatch: async ({ batch, resolveOffset, heartbeat, commitOffsetsIfNecessary, uncommittedOffsets, isRunning, isStale, pause, }) => {
                for (let message of batch.messages) {
                    fn(message);
                    resolveOffset(message.offset);
                    await heartbeat();
                }
            },
        });
    }
}
exports.Connector = Connector;
