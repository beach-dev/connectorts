"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
const config_1 = require("../../config/config");
const client = __importStar(require("prom-client"));
const express_1 = __importDefault(require("express"));
class Monitor {
    constructor(connectorName) {
        this.connectorName = connectorName;
        this.kafkaLastWriteTime = new client.Gauge({
            name: 'kafka_last_write_time',
            help: 'connectors last time write to kafka',
            labelNames: ['connector']
        });
    }
    static async startMonitor(name) {
        let m = new Monitor(name);
        console.log(`starting monitoring. name: ${name}`);
        let collectDefaultMetrics = client.collectDefaultMetrics;
        collectDefaultMetrics({ prefix: name + '_' });
        await client.register.metrics();
        let aggregatorRegistry = new client.AggregatorRegistry();
        let metricsServer = (0, express_1.default)();
        metricsServer.get('/metrics', async (req, res) => {
            try {
                const metrics = await aggregatorRegistry.clusterMetrics();
                res.set('Content-Type', aggregatorRegistry.contentType);
                res.send(metrics);
            }
            catch (e) {
                res.statusCode = 500;
                res.send(e.message);
            }
        });
        let port = (0, config_1.getPrometheusMetricsPort)();
        metricsServer.listen(port);
        return m;
    }
    async setMetricsForKafkaLastWriteTime() {
        this.kafkaLastWriteTime.setToCurrentTime({ 'connector': this.connectorName });
        await client.register.metrics();
    }
}
exports.Monitor = Monitor;
