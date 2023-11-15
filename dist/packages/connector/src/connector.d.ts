import * as protobuf from "@bufbuild/protobuf";
import { IConfig } from '../../config/config';
import { Manifest } from './manifest';
import { MsgType, ConsumerOptions } from '../../kafkautils/src/types';
import { KafkaMessage } from '../../kafkautils/src/message';
import { Topic } from '../../kafkautils/src/topic';
export declare class Connector {
    private _config;
    private env;
    private manifest;
    private kafkaUrl;
    private protoRegistryHost;
    private _RPCs;
    private _mutex;
    private consumer?;
    private producer?;
    private constructor();
    /**
     * create() builds a new Connector instance.
     *
     * @param options functions to apply to connector instance
     * @returns new connector instance
     */
    static create(...options: ((c: Connector) => void)[]): Connector;
    /**
     * parseOption() applies custom functions to the Connector instance.
     *
     * @param connector connector instance
     * @param options functions to apply to the connector instance
     */
    private static parseOptions;
    /**
     * withManifest() returns a function that will be applied manually to Connector instance.
     * @param manifest connector metadata
     * @returns function to be applied to connector
     */
    static withManifest(manifest: Manifest): (c: Connector) => void;
    /**
     * id() returns a unique id for this Connector instance, based on the manifest.
     * @returns Connector ID string
     */
    private id;
    get RPCs(): any;
    get config(): IConfig;
    /**
     * generateTopicFromProto generates message queue topic names based on the protobuf message.
     * Event names should be prefixed with contract_ or category_ when appropriate.
     *
     * @param msgType kafkautils message type
     * @param msg  protobuf message
     * @returns Topic object
     */
    private generateTopicFromProto;
    /**
     * registerProtos generates kafka topic and protobuf type mappings from proto.Message and registers them dynamically.
     * @param protoPath path to folder containing .proto file
     * @param msgType kafkautils message type
     * @param protos protocol buffer definitions
     * @returns
     */
    registerProtos(protoPath: string, msgType: MsgType, ...protos: protobuf.Message[]): void;
    /**
     * startProducer() creates a new kafka producer instance.
     */
    private startProducer;
    /**
     * produceMessages() wraps incoming messages with a kafka transaction and sends them to kafka.
     *
     * @param msgType kafkautils message type
     * @param messages messages to be pushed to kafka
     */
    produceMessages(msgType: MsgType, messages: protobuf.Message[]): Promise<void>;
    /**
     * startConsumer() creates a new kafka consumer instance.
     *
     * @param overrideOpts a dict to override default kafka consumer options
     */
    private startConsumer;
    /**
     * subscribe() subscribes the connector to given kafka topics and
     * applies the provided function to each incoming message.
     *
     * @param topics kafka topics to subscribe to
     * @param fn a function to apply to each message
     * @param overrideOpts a dict to override default kafka consumer options
     */
    subscribe(topics: Topic[], fn: (msg: KafkaMessage) => void, overrideOpts: ConsumerOptions): Promise<void>;
}
