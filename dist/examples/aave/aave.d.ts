import { CLIConfig } from "../../packages/chain/ethereum/src/types";
export declare class Aave {
    private config;
    constructor(conf: CLIConfig);
    start(): Promise<void>;
}
