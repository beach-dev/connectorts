"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProducer = void 0;
const kafkajs_1 = require("kafkajs");
function newProducer(brokers, clientId) {
    if (!Array.isArray(brokers)) {
        brokers = [brokers];
    }
    let kafka = new kafkajs_1.Kafka({
        clientId: clientId,
        brokers: brokers
    });
    // {"level":"WARN","timestamp":"2023-02-08T10:31:55.319Z","logger":"kafkajs","message":"KafkaJS v2.0.0 switched default partitioner. 
    // To retain the same partitioning behavior as in previous versions, create the producer with the option \"createPartitioner: Partitioners.LegacyPartitioner\". 
    // See the migration guide at https://kafka.js.org/docs/migration-guide-v2.0.0#producer-new-default-partitioner for details. 
    // Silence this warning by setting the environment variable \"KAFKAJS_NO_PARTITIONER_WARNING=1\""}
    process.env.KAFKAJS_NO_PARTITIONER_WARNING = "1";
    return kafka.producer({
        transactionalId: clientId + '-producer',
        maxInFlightRequests: 1,
        idempotent: true
    });
}
exports.newProducer = newProducer;
