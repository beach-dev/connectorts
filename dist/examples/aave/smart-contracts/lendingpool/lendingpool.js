"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const protobuf = __importStar(require("@bufbuild/protobuf"));
const ethers_1 = require("ethers");
const event_1 = require("../../../../packages/chain/ethereum/src/event");
const lendingpool_abi_json_1 = __importDefault(require("./lendingpool.abi.json"));
const lp = __importStar(require("./lendingpool_pb"));
const iContract = new ethers_1.utils.Interface(lendingpool_abi_json_1.default);
function message(vLog, timestamp) {
    let parsedLog = iContract.parseLog(vLog);
    let args = parsedLog.args;
    let ts = new protobuf.Timestamp();
    ts.seconds = BigInt(timestamp);
    switch (parsedLog.name) {
        case 'Borrow':
            let borrow = new lp.Borrow();
            borrow.ts = ts;
            borrow.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            borrow.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            borrow.onBehalfOf = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            borrow.amount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            borrow.borrowRateMode = (0, event_1.parseInput)(event_1.InputType.UINT256, args[4]);
            borrow.borrowRate = (0, event_1.parseInput)(event_1.InputType.UINT256, args[5]);
            borrow.referral = (0, event_1.parseInput)(event_1.InputType.UINT16, args[6]);
            borrow.blockNumber = BigInt(vLog.blockNumber);
            borrow.logIndex = BigInt(vLog.logIndex);
            borrow.txHash = vLog.transactionHash;
            return borrow;
        case 'Deposit':
            let deposit = new lp.Deposit();
            deposit.ts = ts;
            deposit.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            deposit.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            deposit.onBehalfOf = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            deposit.amount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            deposit.referral = (0, event_1.parseInput)(event_1.InputType.UINT16, args[4]);
            deposit.blockNumber = BigInt(vLog.blockNumber);
            deposit.logIndex = BigInt(vLog.logIndex);
            deposit.txHash = vLog.transactionHash;
            return deposit;
        case 'RebalanceStableBorrowRate':
            let rsbr = new lp.RebalanceStableBorrowRate();
            rsbr.ts = ts;
            rsbr.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            rsbr.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            rsbr.blockNumber = BigInt(vLog.blockNumber);
            rsbr.logIndex = BigInt(vLog.logIndex);
            rsbr.txHash = vLog.transactionHash;
            return rsbr;
        case 'ReserveUsedAsCollateralDisabled':
            let ruacd = new lp.ReserveUsedAsCollateralDisabled();
            ruacd.ts = ts;
            ruacd.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            ruacd.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            ruacd.blockNumber = BigInt(vLog.blockNumber);
            ruacd.logIndex = BigInt(vLog.logIndex);
            ruacd.txHash = vLog.transactionHash;
            return ruacd;
        case 'ReserveUsedAsCollateralEnabled':
            let ruace = new lp.ReserveUsedAsCollateralEnabled();
            ruace.ts = ts;
            ruace.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            ruace.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            ruace.blockNumber = BigInt(vLog.blockNumber);
            ruace.logIndex = BigInt(vLog.logIndex);
            ruace.txHash = vLog.transactionHash;
            return ruace;
        case "Withdraw":
            let withdraw = new lp.Withdraw();
            withdraw.ts = ts;
            withdraw.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            withdraw.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            withdraw.to = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            withdraw.amount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            withdraw.blockNumber = BigInt(vLog.blockNumber);
            withdraw.logIndex = BigInt(vLog.logIndex);
            withdraw.txHash = vLog.transactionHash;
            return withdraw;
        case "ReserveDataUpdated":
            let rdu = new lp.ReserveDataUpdated();
            rdu.ts = ts;
            rdu.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            rdu.liquidityRate = (0, event_1.parseInput)(event_1.InputType.UINT256, args[1]);
            rdu.stableBorrowRate = (0, event_1.parseInput)(event_1.InputType.UINT256, args[2]);
            rdu.variableBorrowRate = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            rdu.liquidityIndex = (0, event_1.parseInput)(event_1.InputType.UINT256, args[4]);
            rdu.variableBorrowIndex = (0, event_1.parseInput)(event_1.InputType.UINT256, args[5]);
            rdu.blockNumber = BigInt(vLog.blockNumber);
            rdu.logIndex = BigInt(vLog.logIndex);
            rdu.txHash = vLog.transactionHash;
            return rdu;
        case 'Swap':
            let swap = new lp.Swap();
            swap.ts = ts;
            swap.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            swap.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            swap.rateMode = (0, event_1.parseInput)(event_1.InputType.UINT256, args[2]);
            swap.blockNumber = BigInt(vLog.blockNumber);
            swap.logIndex = BigInt(vLog.logIndex);
            swap.txHash = vLog.transactionHash;
            return swap;
        case 'Unpaused':
            let unpaused = new lp.Unpaused();
            unpaused.ts = ts;
            unpaused.blockNumber = BigInt(vLog.blockNumber);
            unpaused.logIndex = BigInt(vLog.logIndex);
            unpaused.txHash = vLog.transactionHash;
            return unpaused;
        case 'LiquidationCall':
            let lc = new lp.LiquidationCall();
            lc.ts = ts;
            lc.collateralAsset = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            lc.debtAsset = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            lc.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            lc.debtToCover = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            lc.liquidatedCollateralAmount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[4]);
            lc.liquidator = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[5]);
            lc.receiveAToken = (0, event_1.parseInput)(event_1.InputType.BOOL, args[6]);
            lc.blockNumber = BigInt(vLog.blockNumber);
            lc.logIndex = BigInt(vLog.logIndex);
            lc.txHash = vLog.transactionHash;
            return lc;
        case 'Repay':
            let repay = new lp.Repay();
            repay.ts = ts;
            repay.reserve = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            repay.user = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            repay.repayer = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            repay.amount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            repay.blockNumber = BigInt(vLog.blockNumber);
            repay.logIndex = BigInt(vLog.logIndex);
            repay.txHash = vLog.transactionHash;
            return repay;
        case 'FlashLoan':
            let fl = new lp.FlashLoan();
            fl.ts = ts;
            fl.target = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[0]);
            fl.initiator = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[1]);
            fl.asset = (0, event_1.parseInput)(event_1.InputType.ADDRESS, args[2]);
            fl.amount = (0, event_1.parseInput)(event_1.InputType.UINT256, args[3]);
            fl.premium = (0, event_1.parseInput)(event_1.InputType.UINT256, args[4]);
            fl.referralCode = (0, event_1.parseInput)(event_1.InputType.UINT32, args[5]);
            fl.blockNumber = BigInt(vLog.blockNumber);
            fl.logIndex = BigInt(vLog.logIndex);
            fl.txHash = vLog.transactionHash;
            return fl;
        case 'Paused':
            let paused = new lp.Paused();
            paused.ts = ts;
            paused.blockNumber = BigInt(vLog.blockNumber);
            paused.logIndex = BigInt(vLog.logIndex);
            paused.txHash = vLog.transactionHash;
            return paused;
    }
    return new protobuf.Message();
}
exports.message = message;
