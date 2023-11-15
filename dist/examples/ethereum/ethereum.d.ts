import { CLIConfig } from "../../packages/chain/ethereum/src/types";
export declare class Ethereum {
    private config;
    private ethConnector;
    constructor(conf: CLIConfig);
    start(): Promise<void>;
    private backfill;
    private listenBlocks;
    private process;
}
