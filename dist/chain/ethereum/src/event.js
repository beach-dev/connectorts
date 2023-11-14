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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = exports.InputType = void 0;
const ethers_1 = require("ethers");
const bigintConversion = __importStar(require("bigint-conversion"));
var InputType;
(function (InputType) {
    InputType["ADDRESS"] = "address";
    InputType["UINT256"] = "uint256";
    InputType["UINT32"] = "uint256";
    InputType["UINT16"] = "uint16";
    InputType["BOOL"] = "bool";
})(InputType = exports.InputType || (exports.InputType = {}));
function parseInput(inputType, value) {
    switch (inputType) {
        case 'address':
            return Uint8Array.from(Buffer.from(value));
        case 'uint256':
            return Uint8Array.from(bigintConversion.bigintToBuf(ethers_1.BigNumber.from(value).toBigInt()));
        case 'uint16':
        case 'uint32':
        case 'bool':
        default:
            return value;
    }
}
exports.parseInput = parseInput;
