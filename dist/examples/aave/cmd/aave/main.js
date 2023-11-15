"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_command_line_args_1 = require("ts-command-line-args");
const aave_1 = require("../../aave");
const conf = (0, ts_command_line_args_1.parse)({
    connectorName: { type: String, alias: 'n', optional: true, description: 'name of connector (optional)' },
    blockchainName: { type: String, alias: 'c', optional: true, description: 'name of the blockchain connector runs on (optional)' },
    fromBlock: { type: Number, alias: 'f', optional: true, description: 'block number to start backfill from (optional)' },
    numBlocks: { type: Number, alias: 'b', optional: true, description: 'number of blocks to backfill (optional)' },
    help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
}, {
    helpArg: 'help',
    headerContentSections: [{ header: 'Aave connector', content: 'Aave connector indexes on-chain event logs from Aave protocol.' }],
    footerContentSections: [{ content: `powered by Nakji Network` }],
});
conf.connectorName = "aave";
conf.blockchainName = "ethereum";
var conn = new aave_1.Aave(conf);
conn.start();
