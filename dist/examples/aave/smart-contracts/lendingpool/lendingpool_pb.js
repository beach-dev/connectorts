"use strict";
// Code generated - DO NOT EDIT.
// This file is a generated protobuf definition and any manual changes will be lost.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paused = exports.FlashLoan = exports.Repay = exports.LiquidationCall = exports.Unpaused = exports.Swap = exports.ReserveDataUpdated = exports.Withdraw = exports.ReserveUsedAsCollateralEnabled = exports.ReserveUsedAsCollateralDisabled = exports.RebalanceStableBorrowRate = exports.Deposit = exports.Borrow = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message lendingpool.Borrow
 */
class Borrow extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: bytes onBehalfOf = 4;
         */
        this.onBehalfOf = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes amount = 5;
         */
        this.amount = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes borrowRateMode = 6;
         */
        this.borrowRateMode = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes borrowRate = 7;
         */
        this.borrowRate = new Uint8Array(0);
        /**
         * @generated from field: uint32 referral = 8;
         */
        this.referral = 0;
        /**
         * @generated from field: uint64 blockNumber = 9;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 10;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 11;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Borrow().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Borrow().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Borrow().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Borrow, a, b);
    }
}
exports.Borrow = Borrow;
Borrow.runtime = protobuf_1.proto3;
Borrow.typeName = "lendingpool.Borrow";
Borrow.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "onBehalfOf", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "borrowRateMode", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "borrowRate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "referral", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Deposit
 */
class Deposit extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: bytes onBehalfOf = 4;
         */
        this.onBehalfOf = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes amount = 5;
         */
        this.amount = new Uint8Array(0);
        /**
         * @generated from field: uint32 referral = 6;
         */
        this.referral = 0;
        /**
         * @generated from field: uint64 blockNumber = 7;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 8;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 9;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Deposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Deposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Deposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Deposit, a, b);
    }
}
exports.Deposit = Deposit;
Deposit.runtime = protobuf_1.proto3;
Deposit.typeName = "lendingpool.Deposit";
Deposit.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "onBehalfOf", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "referral", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.RebalanceStableBorrowRate
 */
class RebalanceStableBorrowRate extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 4;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 5;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 6;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RebalanceStableBorrowRate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RebalanceStableBorrowRate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RebalanceStableBorrowRate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RebalanceStableBorrowRate, a, b);
    }
}
exports.RebalanceStableBorrowRate = RebalanceStableBorrowRate;
RebalanceStableBorrowRate.runtime = protobuf_1.proto3;
RebalanceStableBorrowRate.typeName = "lendingpool.RebalanceStableBorrowRate";
RebalanceStableBorrowRate.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.ReserveUsedAsCollateralDisabled
 */
class ReserveUsedAsCollateralDisabled extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 4;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 5;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 6;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReserveUsedAsCollateralDisabled().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReserveUsedAsCollateralDisabled().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReserveUsedAsCollateralDisabled().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ReserveUsedAsCollateralDisabled, a, b);
    }
}
exports.ReserveUsedAsCollateralDisabled = ReserveUsedAsCollateralDisabled;
ReserveUsedAsCollateralDisabled.runtime = protobuf_1.proto3;
ReserveUsedAsCollateralDisabled.typeName = "lendingpool.ReserveUsedAsCollateralDisabled";
ReserveUsedAsCollateralDisabled.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.ReserveUsedAsCollateralEnabled
 */
class ReserveUsedAsCollateralEnabled extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 4;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 5;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 6;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReserveUsedAsCollateralEnabled().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReserveUsedAsCollateralEnabled().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReserveUsedAsCollateralEnabled().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ReserveUsedAsCollateralEnabled, a, b);
    }
}
exports.ReserveUsedAsCollateralEnabled = ReserveUsedAsCollateralEnabled;
ReserveUsedAsCollateralEnabled.runtime = protobuf_1.proto3;
ReserveUsedAsCollateralEnabled.typeName = "lendingpool.ReserveUsedAsCollateralEnabled";
ReserveUsedAsCollateralEnabled.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Withdraw
 */
class Withdraw extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: bytes to = 4;
         */
        this.to = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes amount = 5;
         */
        this.amount = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 6;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 7;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 8;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Withdraw().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Withdraw().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Withdraw().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Withdraw, a, b);
    }
}
exports.Withdraw = Withdraw;
Withdraw.runtime = protobuf_1.proto3;
Withdraw.typeName = "lendingpool.Withdraw";
Withdraw.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "to", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.ReserveDataUpdated
 */
class ReserveDataUpdated extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes liquidityRate = 3;
         */
        this.liquidityRate = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes stableBorrowRate = 4;
         */
        this.stableBorrowRate = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes variableBorrowRate = 5;
         */
        this.variableBorrowRate = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes liquidityIndex = 6;
         */
        this.liquidityIndex = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes variableBorrowIndex = 7;
         */
        this.variableBorrowIndex = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 8;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 9;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 10;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReserveDataUpdated().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReserveDataUpdated().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReserveDataUpdated().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ReserveDataUpdated, a, b);
    }
}
exports.ReserveDataUpdated = ReserveDataUpdated;
ReserveDataUpdated.runtime = protobuf_1.proto3;
ReserveDataUpdated.typeName = "lendingpool.ReserveDataUpdated";
ReserveDataUpdated.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "liquidityRate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "stableBorrowRate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "variableBorrowRate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "liquidityIndex", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "variableBorrowIndex", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Swap
 */
class Swap extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes rateMode = 4;
         */
        this.rateMode = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 5;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 6;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 7;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Swap().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Swap().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Swap().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Swap, a, b);
    }
}
exports.Swap = Swap;
Swap.runtime = protobuf_1.proto3;
Swap.typeName = "lendingpool.Swap";
Swap.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "rateMode", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Unpaused
 */
class Unpaused extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 blockNumber = 2;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 3;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 4;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Unpaused().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Unpaused().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Unpaused().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Unpaused, a, b);
    }
}
exports.Unpaused = Unpaused;
Unpaused.runtime = protobuf_1.proto3;
Unpaused.typeName = "lendingpool.Unpaused";
Unpaused.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.LiquidationCall
 */
class LiquidationCall extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes collateralAsset = 2;
         */
        this.collateralAsset = new Uint8Array(0);
        /**
         * @generated from field: bytes debtAsset = 3;
         */
        this.debtAsset = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 4;
         */
        this.user = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes debtToCover = 5;
         */
        this.debtToCover = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes liquidatedCollateralAmount = 6;
         */
        this.liquidatedCollateralAmount = new Uint8Array(0);
        /**
         * @generated from field: bytes liquidator = 7;
         */
        this.liquidator = new Uint8Array(0);
        /**
         * @generated from field: bool receiveAToken = 8;
         */
        this.receiveAToken = false;
        /**
         * @generated from field: uint64 blockNumber = 9;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 10;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 11;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LiquidationCall().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LiquidationCall().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LiquidationCall().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(LiquidationCall, a, b);
    }
}
exports.LiquidationCall = LiquidationCall;
LiquidationCall.runtime = protobuf_1.proto3;
LiquidationCall.typeName = "lendingpool.LiquidationCall";
LiquidationCall.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "collateralAsset", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "debtAsset", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "debtToCover", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "liquidatedCollateralAmount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "liquidator", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "receiveAToken", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Repay
 */
class Repay extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes reserve = 2;
         */
        this.reserve = new Uint8Array(0);
        /**
         * @generated from field: bytes user = 3;
         */
        this.user = new Uint8Array(0);
        /**
         * @generated from field: bytes repayer = 4;
         */
        this.repayer = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes amount = 5;
         */
        this.amount = new Uint8Array(0);
        /**
         * @generated from field: uint64 blockNumber = 6;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 7;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 8;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Repay().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Repay().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Repay().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Repay, a, b);
    }
}
exports.Repay = Repay;
Repay.runtime = protobuf_1.proto3;
Repay.typeName = "lendingpool.Repay";
Repay.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "reserve", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "user", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "repayer", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.FlashLoan
 */
class FlashLoan extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes target = 2;
         */
        this.target = new Uint8Array(0);
        /**
         * @generated from field: bytes initiator = 3;
         */
        this.initiator = new Uint8Array(0);
        /**
         * @generated from field: bytes asset = 4;
         */
        this.asset = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes amount = 5;
         */
        this.amount = new Uint8Array(0);
        /**
         * uint256
         *
         * @generated from field: bytes premium = 6;
         */
        this.premium = new Uint8Array(0);
        /**
         * @generated from field: uint32 referralCode = 7;
         */
        this.referralCode = 0;
        /**
         * @generated from field: uint64 blockNumber = 8;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 9;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 10;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FlashLoan().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FlashLoan().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FlashLoan().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(FlashLoan, a, b);
    }
}
exports.FlashLoan = FlashLoan;
FlashLoan.runtime = protobuf_1.proto3;
FlashLoan.typeName = "lendingpool.FlashLoan";
FlashLoan.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "target", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "initiator", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "asset", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "amount", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "premium", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "referralCode", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message lendingpool.Paused
 */
class Paused extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 blockNumber = 2;
         */
        this.blockNumber = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: uint64 logIndex = 3;
         */
        this.logIndex = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: string txHash = 4;
         */
        this.txHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Paused().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Paused().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Paused().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Paused, a, b);
    }
}
exports.Paused = Paused;
Paused.runtime = protobuf_1.proto3;
Paused.typeName = "lendingpool.Paused";
Paused.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "ts", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "blockNumber", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "logIndex", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "txHash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
