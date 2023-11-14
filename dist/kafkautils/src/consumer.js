"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newConsumer = void 0;
const kafkajs_1 = require("kafkajs");
function newConsumer(brokers, clientId, overrideOpts) {
    if (!Array.isArray(brokers)) {
        brokers = [brokers];
    }
    let kafka = new kafkajs_1.Kafka({
        clientId: clientId,
        brokers: brokers
    });
    const opts = {
        groupId: clientId + '-consumer'
    };
    Object.keys(overrideOpts).map(a => opts[a] = overrideOpts[a]);
    return kafka.consumer(opts);
}
exports.newConsumer = newConsumer;
