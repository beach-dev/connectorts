"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const SemVer = require('semver/classes/semver');
const types_1 = require("./types");
class Topic {
    constructor(env, msgType, author, connectorName, version, pb) {
        this.env = env;
        this.msgType = msgType;
        this.author = author;
        this.connectorName = connectorName;
        this.version = version;
        this.eventName = pb.getType().typeName.replace(".", "_");
    }
    // Schema generates the schema string
    schema() {
        return [
            this.author,
            this.connectorName,
            this.version?.toString().replaceAll(".", "_"),
            this.eventName
        ].join(types_1.CONTEXT_SEPARATOR);
    }
    // String generates the topic string
    toString() {
        return [this.env, this.msgType, this.schema()].join(types_1.CONTEXT_SEPARATOR);
    }
}
exports.Topic = Topic;
