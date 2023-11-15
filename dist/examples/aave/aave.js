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
exports.Aave = void 0;
const ethers_1 = require("ethers");
const types_1 = require("../../packages/kafkautils/src/types");
const types_2 = require("../../packages/chain/ethereum/src/types");
const subscription_1 = require("../../packages/chain/ethereum/src/subscription");
const lendingpool_abi_json_1 = __importDefault(require("./smart-contracts/lendingpool/lendingpool.abi.json"));
const lendingpool = __importStar(require("./smart-contracts/lendingpool/lendingpool"));
const types = __importStar(require("./types"));
class Aave {
    constructor(conf) {
        this.config = conf;
    }
    async start() {
        let subscription = new subscription_1.Subscription();
        subscription.ethConnector.connector.registerProtos(types.lendingPoolProtoDescPath, types_1.MsgType.BF, ...types.lendingPoolProtos);
        let contracts = [
            new types_2.Contract(new ethers_1.utils.Interface(lendingpool_abi_json_1.default), types.contractAddresses.lendingpool, lendingpool.message),
        ];
        if (!this.config.fromBlock && !this.config.numBlocks) {
            // LIVE DATA
            subscription.ethConnector.connector.registerProtos(types.lendingPoolProtoDescPath, types_1.MsgType.FCT, ...types.lendingPoolProtos);
            // Backfill last 100 blocks at every start
            await subscription.ethConnector.backfillEventsWithQueryParams(contracts, 0, 100);
            subscription.subscribeEvents(contracts);
        }
        else {
            // HISTORICAL DATA
            await subscription.ethConnector.backfillEventsWithQueryParams(contracts, this.config.fromBlock, this.config.numBlocks);
        }
    }
}
exports.Aave = Aave;
