/// <reference types="node" />
import { Message, IHeaders } from 'kafkajs';
export declare class KafkaMessage implements Message {
    key?: Buffer | string | null;
    value: Buffer | string | null;
    partition?: number;
    headers?: IHeaders;
    timestamp?: string;
    constructor(value: Buffer | string | null);
}
