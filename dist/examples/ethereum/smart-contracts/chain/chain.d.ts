import * as protobuf from "@bufbuild/protobuf";
import { BlockWithTransactions, TransactionResponse } from '@ethersproject/abstract-provider';
export declare function parseTransaction(transaction: TransactionResponse, timestamp: number): protobuf.Message;
export declare function parseBlock(block: BlockWithTransactions): protobuf.Message;
