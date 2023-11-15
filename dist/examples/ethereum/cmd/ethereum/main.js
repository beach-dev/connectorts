"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_command_line_args_1 = require("ts-command-line-args");
const ethereum_1 = require("../../ethereum");
const conf = (0, ts_command_line_args_1.parse)({
    connectorName: { type: String, alias: 'n', optional: true, description: 'name of connector (optional)' },
    blockchainName: { type: String, alias: 'c', optional: true, description: 'name of the blockchain connector runs on (optional)' },
    fromBlock: { type: Number, alias: 'f', optional: true, description: 'block number to start backfill from (optional)' },
    numBlocks: { type: Number, alias: 'b', optional: true, description: 'number of blocks to backfill (optional)' },
    help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
}, {
    helpArg: 'help',
    headerContentSections: [{ header: 'Etehereum connector', content: 'Aave connector indexes on-chain event logs from Aave protocol.' }],
    footerContentSections: [{ content: `powered by Nakji Network` }],
});
conf.blockchainName = "ethereum";
var conn = new ethereum_1.Ethereum(conf);
conn.start();
