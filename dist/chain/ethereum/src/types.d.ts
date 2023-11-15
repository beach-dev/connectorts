import { Interface } from "ethers/lib/utils";
import * as protobuf from "@bufbuild/protobuf";
export interface CLIConfig {
    connectorName?: string;
    blockchainName?: string;
    fromBlock?: number;
    numBlocks?: number;
    help?: boolean;
}
export interface ILog {
    topics: string[];
    data: string;
    blockNumber: number;
    logIndex: number;
    transactionHash: string;
}
export declare class Contract {
    private _ABI;
    private _address;
    private _parser;
    constructor(ABI: Interface, address: string, parser: (vLog: ILog, timestamp: number) => protobuf.Message);
    get ABI(): Interface;
    get address(): string;
    get parser(): (vLog: ILog, timestamp: number) => protobuf.Message;
}
