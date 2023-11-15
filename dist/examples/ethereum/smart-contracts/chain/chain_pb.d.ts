import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * to convert addresses from bytes to hex address, https://github.com/ethereum/go-ethereum/blob/4b2ff1457ac28fb2894485194e0e344e84c2bcd7/common/types.go#L210
 *
 * @generated from message chain.Transaction
 */
export declare class Transaction extends Message<Transaction> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes From = 2;
     */
    From: Uint8Array;
    /**
     * @generated from field: string Hash = 3;
     */
    Hash: string;
    /**
     * @generated from field: double Size = 4;
     */
    Size: number;
    /**
     * @generated from field: uint64 AccountNonce = 5;
     */
    AccountNonce: bigint;
    /**
     * @generated from field: uint64 Price = 6;
     */
    Price: bigint;
    /**
     * @generated from field: uint64 GasLimit = 7;
     */
    GasLimit: bigint;
    /**
     * @generated from field: bytes Recipient = 8;
     */
    Recipient: Uint8Array;
    /**
     * @generated from field: bytes Amount = 9;
     */
    Amount: Uint8Array;
    /**
     * @generated from field: bytes Payload = 10;
     */
    Payload: Uint8Array;
    /**
     * @generated from field: uint64 V = 11;
     */
    V: bigint;
    /**
     * @generated from field: bytes R = 12;
     */
    R: Uint8Array;
    /**
     * @generated from field: bytes S = 13;
     */
    S: Uint8Array;
    constructor(data?: PartialMessage<Transaction>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "chain.Transaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;
    static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}
/**
 * @generated from message chain.Block
 */
export declare class Block extends Message<Block> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: string Hash = 2;
     */
    Hash: string;
    /**
     * @generated from field: uint64 Difficulty = 3;
     */
    Difficulty: bigint;
    /**
     * @generated from field: uint64 Number = 4;
     */
    Number: bigint;
    /**
     * @generated from field: uint64 GasLimit = 5;
     */
    GasLimit: bigint;
    /**
     * @generated from field: uint64 GasUsed = 6;
     */
    GasUsed: bigint;
    /**
     * @generated from field: uint64 Nonce = 7;
     */
    Nonce: bigint;
    constructor(data?: PartialMessage<Block>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "chain.Block";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Block;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Block;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Block;
    static equals(a: Block | PlainMessage<Block> | undefined, b: Block | PlainMessage<Block> | undefined): boolean;
}
