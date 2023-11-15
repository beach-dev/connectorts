import { ConsumerConfig } from "kafkajs";
export declare const CONTEXT_SEPARATOR = ".";
export declare const CONTRACT_SEPARATOR = "_";
export declare const AGGREGATE_SEPARATOR = "-";
export declare const WILDCARD_SUFFIX = "-*";
export declare const NUM_SEGMENTS = 4;
export declare enum Env {
    PROD = "prod",
    STAGING = "staging",
    DEV = "dev",
    TEST = "test"
}
export declare enum MsgType {
    FCT = "fct",
    BF = "bf",
    CDC = "cdc",
    CMD = "cmd",
    SYS = "sys"
}
export interface ConsumerOptions extends ConsumerConfig {
    [key: string]: any;
}
