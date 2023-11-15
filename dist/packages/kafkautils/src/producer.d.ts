import { Producer } from 'kafkajs';
export declare function newProducer(brokers: string[] | string, clientId: string): Producer;
