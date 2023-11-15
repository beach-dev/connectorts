import { ConsumerOptions } from './types';
import { Consumer } from 'kafkajs';
export declare function newConsumer(brokers: string[] | string, clientId: string, overrideOpts: ConsumerOptions): Consumer;
