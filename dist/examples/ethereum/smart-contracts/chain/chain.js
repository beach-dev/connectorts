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
exports.parseBlock = exports.parseTransaction = void 0;
const protobuf = __importStar(require("@bufbuild/protobuf"));
const event_1 = require("../../../../packages/chain/ethereum/src/event");
const chain = __importStar(require("./chain_pb"));
function parseTransaction(transaction, timestamp) {
    let ts = new protobuf.Timestamp();
    ts.seconds = BigInt(timestamp);
    let tx = new chain.Transaction();
    tx.ts = ts;
    if (transaction.from)
        tx.From = (0, event_1.parseInput)(event_1.InputType.ADDRESS, transaction.from);
    tx.Hash = (0, event_1.parseInput)(event_1.InputType.ADDRESS, transaction.hash);
    // tx.Size = transaction.
    tx.AccountNonce = BigInt(transaction.nonce);
    tx.Price = transaction.gasPrice.toBigInt();
    tx.GasLimit = transaction.gasLimit.toBigInt();
    tx.Recipient = (0, event_1.parseInput)(event_1.InputType.ADDRESS, transaction.to);
    tx.Amount = (0, event_1.parseInput)(event_1.InputType.UINT256, transaction.value);
    tx.Payload = (0, event_1.parseInput)(event_1.InputType.ADDRESS, transaction.data);
    tx.V = BigInt(transaction.v || 0);
    tx.R = (0, event_1.parseInput)(event_1.InputType.UINT256, transaction.r);
    tx.S = (0, event_1.parseInput)(event_1.InputType.UINT256, transaction.s);
    return tx;
}
exports.parseTransaction = parseTransaction;
function parseBlock(block) {
    let ts = new protobuf.Timestamp();
    ts.seconds = BigInt(block.timestamp);
    let bl = new chain.Block();
    bl.ts = ts;
    bl.Hash = block.hash;
    bl.Difficulty = block._difficulty.toBigInt();
    bl.Number = BigInt(block.number);
    bl.GasLimit = block.gasLimit.toBigInt();
    bl.GasUsed = block.gasUsed.toBigInt();
    bl.Nonce = BigInt(block.nonce);
    return bl;
}
exports.parseBlock = parseBlock;
