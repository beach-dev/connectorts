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
exports.Ethereum = void 0;
const ethereum_1 = require("../../packages/chain/ethereum/src/ethereum");
const types_1 = require("../../packages/kafkautils/src/types");
const chain = __importStar(require("./smart-contracts/chain/chain"));
const types = __importStar(require("./types"));
class Ethereum {
    constructor(conf) {
        this.config = conf;
        this.ethConnector = new ethereum_1.EthereumConnector();
    }
    async start() {
        this.ethConnector.connector.registerProtos(types.chainProtoPath, types_1.MsgType.BF, ...types.chainProtos);
        if (!this.config.fromBlock && !this.config.numBlocks) {
            // LIVE DATA
            this.ethConnector.connector.registerProtos(types.chainProtoPath, types_1.MsgType.FCT, ...types.chainProtos);
            // Backfill last 100 blocks at every start
            await this.backfill(0, 100);
            await this.listenBlocks();
        }
        else {
            // HISTORICAL DATA
            await this.backfill(this.config.fromBlock, this.config.numBlocks);
        }
    }
    async backfill(fromBlock, numBlocks) {
        if (fromBlock == 0 && numBlocks == 0)
            return;
        // Calculate block interval for historical data
        let startingBlock = fromBlock;
        let toBlock = await this.ethConnector.provider.getBlockNumber();
        if (fromBlock > 0 && numBlocks > 0) {
            let lastBlock = fromBlock + numBlocks;
            if (lastBlock < toBlock) {
                toBlock = lastBlock;
            }
        }
        else if (numBlocks > 0 && numBlocks < toBlock) {
            startingBlock = toBlock - numBlocks;
        }
        while (startingBlock < toBlock) {
            await this.process(toBlock, types_1.MsgType.BF);
            toBlock--;
        }
    }
    async listenBlocks() {
        this.ethConnector.provider.on("block", async (blockNumber) => {
            await this.process(blockNumber, types_1.MsgType.FCT);
        });
    }
    async process(blockNumber, msgType) {
        let block = await this.ethConnector.provider.getBlockWithTransactions(blockNumber);
        let blockMsg = chain.parseBlock(block);
        console.log("BLOCK : " + JSON.stringify(block));
        let messages = [blockMsg];
        let transactions = block.transactions;
        for (let tx of transactions) {
            let txMsg = chain.parseTransaction(tx, block.timestamp);
            messages.push(txMsg);
        }
        this.ethConnector.connector.produceMessages(msgType, messages);
    }
}
exports.Ethereum = Ethereum;
