import { Message } from "@bufbuild/protobuf";
import { MsgType } from "../../kafkautils/src/types";
export type TopicTypes = {
    [tt: string]: Message;
};
type TopicProtoMsg = {
    msg_type: MsgType;
    topic: string;
    proto_msg: string;
    file_descriptor_proto?: Message;
    descriptor: string;
};
/**
 * registerDynamicTopics() stores protobuf definitions and creates kafka topics for them.
 *
 * @param host URL to protoregistry host
 * @param topicTypes topic name to protobuf definition map
 * @param msgType {@link MsgType} kafka message type
 */
export declare function registerDynamicTopics(URL: string, topicTypes: TopicTypes, msgType: MsgType, protoPath: string): void;
/**
 *
 * @param topicTypes map of kafka topic name to protobuf definition
 * @param msgType {@link MsgType} kafkautils message type
 * @returns array of topic proto messages
 */
export declare function buildTopicProtoMsgs(topicTypes: TopicTypes, msgType: MsgType, protoPath: string): TopicProtoMsg[];
export {};
