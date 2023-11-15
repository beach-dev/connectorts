import { Provider } from '@ethersproject/abstract-provider';
import { Connector } from '../../../connector/src/connector';
import { Contract } from './types';
export declare class EthereumConnector {
    connector: Connector;
    provider: Provider;
    constructor(...options: ((c: Connector) => void)[]);
    getBlockTime(blockNumber: number): Promise<number>;
    /**
     * backfillEvents queries past blocks for the events emitted by the given contract addresses.
     * These events are then fed into the given parser function and then pushed to Kafka.
     * @param contracts smart contracts to be queried for events
     * @param fromBlock starting block number
     * @param toBlock last block number
     * @param backoff wait period before making the call
     */
    backfillEvents(contracts: Contract[], fromBlock: number, toBlock: number, backoff: number): Promise<void>;
    /**
     * backfillEventsWithQueryParams determines block interval from query params and calls {@link backfillEvents}.
     * fromBlock > 0 && numBlocks > 0 => Backfill from fromBlock to fromBlock+numBlocks
     * fromBlock > 0 && numBlocks = 0 => Backfill from fromBlock to current latest block
     * fromBlock = 0 && numBlocks > 0 => Backfill last numBlocks blocks
     * @param contracts smart contracts to be queried for events
     * @param fromBlock starting block number
     * @param numBlocks number of blocks to process
     */
    backfillEventsWithQueryParams(contracts: Contract[], fromBlock: number | undefined, numBlocks: number | undefined): Promise<void>;
}
