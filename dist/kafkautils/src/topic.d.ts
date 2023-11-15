declare const SemVer: any;
import { Message } from "@bufbuild/protobuf";
import { Env, MsgType } from './types';
export declare class Topic {
    readonly env: Env;
    readonly msgType: MsgType;
    readonly author: string;
    readonly connectorName: string;
    readonly version: typeof SemVer;
    readonly eventName: string;
    constructor(env: Env, msgType: MsgType, author: string, connectorName: string, version: typeof SemVer, pb: Message);
    schema(): string;
    toString(): string;
}
export {};
