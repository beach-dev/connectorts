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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTopicProtoMsgs = exports.registerDynamicTopics = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const http_1 = require("http");
/**
 * registerDynamicTopics() stores protobuf definitions and creates kafka topics for them.
 *
 * @param host URL to protoregistry host
 * @param topicTypes topic name to protobuf definition map
 * @param msgType {@link MsgType} kafka message type
 */
function registerDynamicTopics(URL, topicTypes, msgType, protoPath) {
    let tpmList = buildTopicProtoMsgs(topicTypes, msgType, protoPath);
    if (!tpmList.length)
        return;
    let [host, port] = URL.split(":");
    let payload = JSON.stringify(tpmList);
    let req = (0, http_1.request)({
        hostname: host,
        port: port,
        path: '/v1/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    }, (res) => {
        if (res.statusCode === 200) {
            console.log("uploaded protobuf definitions successfully");
        }
    });
    req.on('error', (e) => {
        console.error(`protoregistry call failed. error: ${e.message}`);
    });
    req.write(payload);
    req.end();
}
exports.registerDynamicTopics = registerDynamicTopics;
/**
 *
 * @param topicTypes map of kafka topic name to protobuf definition
 * @param msgType {@link MsgType} kafkautils message type
 * @returns array of topic proto messages
 */
function buildTopicProtoMsgs(topicTypes, msgType, protoPath) {
    var tpmList = [];
    let protoDescPath = getProtoDescPath(protoPath);
    if (protoDescPath == '')
        return [];
    let protoDesc = fs.readFileSync(protoDescPath, 'base64');
    for (let k of Object.keys(topicTypes)) {
        let tpm = {
            msg_type: msgType,
            topic: k,
            proto_msg: parseProtoName(k),
            // file_descriptor_proto: v,
            descriptor: protoDesc
        };
        tpmList.push(tpm);
    }
    return tpmList;
}
exports.buildTopicProtoMsgs = buildTopicProtoMsgs;
/**
 *
 * @param topic topic name in the format of e.g. nakji.uniswapv2.0_0_0.liquiditypool_Change
 * @returns proto_msg name in the format of e.g. nakji.uniswapv2.liquiditypool.Change
 */
function parseProtoName(topic) {
    let t = topic.split(".");
    t.splice(2, 1);
    return t.slice(2).join(".").replaceAll("_", ".");
}
function getProtoDescPath(protoPath) {
    let protoDescPath = '';
    const files = fs.readdirSync(protoPath, { withFileTypes: true });
    for (const file of files) {
        let fileSplit = file.name.split('.');
        if (fileSplit.length == 3 && fileSplit[2] == "desc")
            protoDescPath = (0, path_1.join)(protoPath, file.name);
    }
    return protoDescPath;
}
