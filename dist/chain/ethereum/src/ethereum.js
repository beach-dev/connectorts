"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumConnector = void 0;
const ethers_1 = require("ethers");
const connector_1 = require("../../../connector/src/connector");
const types_1 = require("../../../kafkautils/src/types");
const BLOCK_CHUNK_SIZE = 2000; // Some RPC nodes limit to 2000 but there are also event count and/or response size limitations.
const INITIAL_BACKOFF_DURATION = 1000; // Initial backoff duration before re-hitting RPC node, 1 second in millisecods
const MAX_BACKOFF_DURATION = 3600000; // Maximum backoff duration before resetting, 1 hour in milliseconds
class EthereumConnector {
    constructor(...options) {
        this.connector = connector_1.Connector.create(...options);
        let URL = '';
        for (let rpc of this.connector.RPCs.ethereum.full) {
            if (rpc.startsWith('ws')) {
                URL = rpc;
                break;
            }
        }
        this.provider = new ethers_1.ethers.providers.WebSocketProvider(URL);
    }
    async getBlockTime(blockNumber) {
        let block = await this.provider.getBlock(blockNumber);
        return block.timestamp;
    }
    /**
     * backfillEvents queries past blocks for the events emitted by the given contract addresses.
     * These events are then fed into the given parser function and then pushed to Kafka.
     * @param contracts smart contracts to be queried for events
     * @param fromBlock starting block number
     * @param toBlock last block number
     * @param backoff wait period before making the call
     */
    async backfillEvents(contracts, fromBlock, toBlock, backoff) {
        console.log(`retrieving historical events from ${fromBlock} to ${toBlock}...`);
        if (backoff < INITIAL_BACKOFF_DURATION || backoff > MAX_BACKOFF_DURATION) {
            backoff = INITIAL_BACKOFF_DURATION;
        }
        setTimeout;
        if (toBlock - fromBlock > BLOCK_CHUNK_SIZE) {
            await this.backfillEvents(contracts, fromBlock, fromBlock + BLOCK_CHUNK_SIZE, backoff);
            await this.backfillEvents(contracts, fromBlock + BLOCK_CHUNK_SIZE, toBlock, backoff);
            return;
        }
        for (let contract of contracts) {
            let filter = {
                address: contract.address,
                fromBlock: fromBlock,
                toBlock: toBlock,
            };
            let logs = await this.provider.getLogs(filter).catch((e) => {
                console.log(`call failed, retrying after ${backoff / 1000} seconds. error:` + JSON.stringify(e));
                let mid = Math.floor((fromBlock + toBlock) / 2);
                setTimeout(async () => { await this.backfillEvents(contracts, fromBlock, mid, backoff << 1); }, backoff);
                setTimeout(async () => { await this.backfillEvents(contracts, mid + 1, toBlock, backoff << 1); }, backoff);
                return;
            });
            if (!logs)
                continue;
            let blockNumber = 0;
            let messages = [];
            for (let vLog of logs) {
                let ts = await this.getBlockTime(vLog.blockNumber);
                let msg = contract.parser(vLog, ts);
                if (blockNumber != vLog.blockNumber) {
                    console.debug(`${messages.length} message(s) from ${contract.address} at block #${blockNumber}`);
                    this.connector.produceMessages(types_1.MsgType.BF, messages);
                    blockNumber = vLog.blockNumber;
                    messages = [msg];
                }
                else {
                    messages.push(msg);
                }
            }
        }
    }
    /**
     * backfillEventsWithQueryParams determines block interval from query params and calls {@link backfillEvents}.
     * fromBlock > 0 && numBlocks > 0 => Backfill from fromBlock to fromBlock+numBlocks
     * fromBlock > 0 && numBlocks = 0 => Backfill from fromBlock to current latest block
     * fromBlock = 0 && numBlocks > 0 => Backfill last numBlocks blocks
     * @param contracts smart contracts to be queried for events
     * @param fromBlock starting block number
     * @param numBlocks number of blocks to process
     */
    async backfillEventsWithQueryParams(contracts, fromBlock, numBlocks) {
        if (!fromBlock)
            fromBlock = 0;
        if (!numBlocks)
            numBlocks = 0;
        let toBlock = await this.provider.getBlockNumber();
        if (fromBlock > 0 && numBlocks > 0 && fromBlock + numBlocks < toBlock) {
            toBlock = fromBlock + numBlocks;
        }
        else if (fromBlock == 0 && numBlocks > 0) {
            fromBlock = toBlock - numBlocks;
        }
        await this.backfillEvents(contracts, fromBlock, toBlock, 0);
    }
}
exports.EthereumConnector = EthereumConnector;
