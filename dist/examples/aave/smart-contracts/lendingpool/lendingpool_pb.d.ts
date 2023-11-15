import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message lendingpool.Borrow
 */
export declare class Borrow extends Message<Borrow> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: bytes onBehalfOf = 4;
     */
    onBehalfOf: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes borrowRateMode = 6;
     */
    borrowRateMode: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes borrowRate = 7;
     */
    borrowRate: Uint8Array;
    /**
     * @generated from field: uint32 referral = 8;
     */
    referral: number;
    /**
     * @generated from field: uint64 blockNumber = 9;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 10;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 11;
     */
    txHash: string;
    constructor(data?: PartialMessage<Borrow>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Borrow";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Borrow;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Borrow;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Borrow;
    static equals(a: Borrow | PlainMessage<Borrow> | undefined, b: Borrow | PlainMessage<Borrow> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Deposit
 */
export declare class Deposit extends Message<Deposit> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: bytes onBehalfOf = 4;
     */
    onBehalfOf: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * @generated from field: uint32 referral = 6;
     */
    referral: number;
    /**
     * @generated from field: uint64 blockNumber = 7;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 8;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 9;
     */
    txHash: string;
    constructor(data?: PartialMessage<Deposit>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Deposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deposit;
    static equals(a: Deposit | PlainMessage<Deposit> | undefined, b: Deposit | PlainMessage<Deposit> | undefined): boolean;
}
/**
 * @generated from message lendingpool.RebalanceStableBorrowRate
 */
export declare class RebalanceStableBorrowRate extends Message<RebalanceStableBorrowRate> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 4;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 5;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 6;
     */
    txHash: string;
    constructor(data?: PartialMessage<RebalanceStableBorrowRate>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.RebalanceStableBorrowRate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RebalanceStableBorrowRate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RebalanceStableBorrowRate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RebalanceStableBorrowRate;
    static equals(a: RebalanceStableBorrowRate | PlainMessage<RebalanceStableBorrowRate> | undefined, b: RebalanceStableBorrowRate | PlainMessage<RebalanceStableBorrowRate> | undefined): boolean;
}
/**
 * @generated from message lendingpool.ReserveUsedAsCollateralDisabled
 */
export declare class ReserveUsedAsCollateralDisabled extends Message<ReserveUsedAsCollateralDisabled> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 4;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 5;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 6;
     */
    txHash: string;
    constructor(data?: PartialMessage<ReserveUsedAsCollateralDisabled>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.ReserveUsedAsCollateralDisabled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReserveUsedAsCollateralDisabled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReserveUsedAsCollateralDisabled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReserveUsedAsCollateralDisabled;
    static equals(a: ReserveUsedAsCollateralDisabled | PlainMessage<ReserveUsedAsCollateralDisabled> | undefined, b: ReserveUsedAsCollateralDisabled | PlainMessage<ReserveUsedAsCollateralDisabled> | undefined): boolean;
}
/**
 * @generated from message lendingpool.ReserveUsedAsCollateralEnabled
 */
export declare class ReserveUsedAsCollateralEnabled extends Message<ReserveUsedAsCollateralEnabled> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 4;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 5;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 6;
     */
    txHash: string;
    constructor(data?: PartialMessage<ReserveUsedAsCollateralEnabled>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.ReserveUsedAsCollateralEnabled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReserveUsedAsCollateralEnabled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReserveUsedAsCollateralEnabled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReserveUsedAsCollateralEnabled;
    static equals(a: ReserveUsedAsCollateralEnabled | PlainMessage<ReserveUsedAsCollateralEnabled> | undefined, b: ReserveUsedAsCollateralEnabled | PlainMessage<ReserveUsedAsCollateralEnabled> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Withdraw
 */
export declare class Withdraw extends Message<Withdraw> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: bytes to = 4;
     */
    to: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 6;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 7;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 8;
     */
    txHash: string;
    constructor(data?: PartialMessage<Withdraw>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Withdraw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Withdraw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Withdraw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Withdraw;
    static equals(a: Withdraw | PlainMessage<Withdraw> | undefined, b: Withdraw | PlainMessage<Withdraw> | undefined): boolean;
}
/**
 * @generated from message lendingpool.ReserveDataUpdated
 */
export declare class ReserveDataUpdated extends Message<ReserveDataUpdated> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes liquidityRate = 3;
     */
    liquidityRate: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes stableBorrowRate = 4;
     */
    stableBorrowRate: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes variableBorrowRate = 5;
     */
    variableBorrowRate: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes liquidityIndex = 6;
     */
    liquidityIndex: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes variableBorrowIndex = 7;
     */
    variableBorrowIndex: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 8;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 9;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 10;
     */
    txHash: string;
    constructor(data?: PartialMessage<ReserveDataUpdated>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.ReserveDataUpdated";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReserveDataUpdated;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReserveDataUpdated;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReserveDataUpdated;
    static equals(a: ReserveDataUpdated | PlainMessage<ReserveDataUpdated> | undefined, b: ReserveDataUpdated | PlainMessage<ReserveDataUpdated> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Swap
 */
export declare class Swap extends Message<Swap> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes rateMode = 4;
     */
    rateMode: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 5;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 6;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 7;
     */
    txHash: string;
    constructor(data?: PartialMessage<Swap>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Swap";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Swap;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Swap;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Swap;
    static equals(a: Swap | PlainMessage<Swap> | undefined, b: Swap | PlainMessage<Swap> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Unpaused
 */
export declare class Unpaused extends Message<Unpaused> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: uint64 blockNumber = 2;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 3;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 4;
     */
    txHash: string;
    constructor(data?: PartialMessage<Unpaused>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Unpaused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Unpaused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Unpaused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Unpaused;
    static equals(a: Unpaused | PlainMessage<Unpaused> | undefined, b: Unpaused | PlainMessage<Unpaused> | undefined): boolean;
}
/**
 * @generated from message lendingpool.LiquidationCall
 */
export declare class LiquidationCall extends Message<LiquidationCall> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes collateralAsset = 2;
     */
    collateralAsset: Uint8Array;
    /**
     * @generated from field: bytes debtAsset = 3;
     */
    debtAsset: Uint8Array;
    /**
     * @generated from field: bytes user = 4;
     */
    user: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes debtToCover = 5;
     */
    debtToCover: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes liquidatedCollateralAmount = 6;
     */
    liquidatedCollateralAmount: Uint8Array;
    /**
     * @generated from field: bytes liquidator = 7;
     */
    liquidator: Uint8Array;
    /**
     * @generated from field: bool receiveAToken = 8;
     */
    receiveAToken: boolean;
    /**
     * @generated from field: uint64 blockNumber = 9;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 10;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 11;
     */
    txHash: string;
    constructor(data?: PartialMessage<LiquidationCall>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.LiquidationCall";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidationCall;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidationCall;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidationCall;
    static equals(a: LiquidationCall | PlainMessage<LiquidationCall> | undefined, b: LiquidationCall | PlainMessage<LiquidationCall> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Repay
 */
export declare class Repay extends Message<Repay> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes reserve = 2;
     */
    reserve: Uint8Array;
    /**
     * @generated from field: bytes user = 3;
     */
    user: Uint8Array;
    /**
     * @generated from field: bytes repayer = 4;
     */
    repayer: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * @generated from field: uint64 blockNumber = 6;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 7;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 8;
     */
    txHash: string;
    constructor(data?: PartialMessage<Repay>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Repay";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Repay;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Repay;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Repay;
    static equals(a: Repay | PlainMessage<Repay> | undefined, b: Repay | PlainMessage<Repay> | undefined): boolean;
}
/**
 * @generated from message lendingpool.FlashLoan
 */
export declare class FlashLoan extends Message<FlashLoan> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: bytes target = 2;
     */
    target: Uint8Array;
    /**
     * @generated from field: bytes initiator = 3;
     */
    initiator: Uint8Array;
    /**
     * @generated from field: bytes asset = 4;
     */
    asset: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * uint256
     *
     * @generated from field: bytes premium = 6;
     */
    premium: Uint8Array;
    /**
     * @generated from field: uint32 referralCode = 7;
     */
    referralCode: number;
    /**
     * @generated from field: uint64 blockNumber = 8;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 9;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 10;
     */
    txHash: string;
    constructor(data?: PartialMessage<FlashLoan>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.FlashLoan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlashLoan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlashLoan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlashLoan;
    static equals(a: FlashLoan | PlainMessage<FlashLoan> | undefined, b: FlashLoan | PlainMessage<FlashLoan> | undefined): boolean;
}
/**
 * @generated from message lendingpool.Paused
 */
export declare class Paused extends Message<Paused> {
    /**
     * @generated from field: google.protobuf.Timestamp ts = 1;
     */
    ts?: Timestamp;
    /**
     * @generated from field: uint64 blockNumber = 2;
     */
    blockNumber: bigint;
    /**
     * @generated from field: uint64 logIndex = 3;
     */
    logIndex: bigint;
    /**
     * @generated from field: string txHash = 4;
     */
    txHash: string;
    constructor(data?: PartialMessage<Paused>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "lendingpool.Paused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Paused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Paused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Paused;
    static equals(a: Paused | PlainMessage<Paused> | undefined, b: Paused | PlainMessage<Paused> | undefined): boolean;
}
