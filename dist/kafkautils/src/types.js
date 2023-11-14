"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgType = exports.Env = exports.NUM_SEGMENTS = exports.WILDCARD_SUFFIX = exports.AGGREGATE_SEPARATOR = exports.CONTRACT_SEPARATOR = exports.CONTEXT_SEPARATOR = void 0;
exports.CONTEXT_SEPARATOR = ".";
exports.CONTRACT_SEPARATOR = "_";
exports.AGGREGATE_SEPARATOR = "-";
exports.WILDCARD_SUFFIX = "-*";
exports.NUM_SEGMENTS = 4;
var Env;
(function (Env) {
    Env["PROD"] = "prod";
    Env["STAGING"] = "staging";
    Env["DEV"] = "dev";
    Env["TEST"] = "test";
})(Env = exports.Env || (exports.Env = {}));
var MsgType;
(function (MsgType) {
    MsgType["FCT"] = "fct";
    MsgType["BF"] = "bf";
    MsgType["CDC"] = "cdc";
    MsgType["CMD"] = "cmd";
    MsgType["SYS"] = "sys";
})(MsgType = exports.MsgType || (exports.MsgType = {}));
