import { EthereumConnector } from './ethereum';
import { Contract } from './types';
export declare class Subscription {
    ethConnector: EthereumConnector;
    constructor();
    subscribeEvents(contracts: Contract[]): void;
}
