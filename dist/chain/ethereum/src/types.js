"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
class Contract {
    constructor(ABI, address, parser) {
        this._ABI = ABI;
        this._address = address;
        this._parser = parser;
    }
    get ABI() {
        return this._ABI;
    }
    get address() {
        return this._address;
    }
    get parser() {
        return this._parser;
    }
}
exports.Contract = Contract;
