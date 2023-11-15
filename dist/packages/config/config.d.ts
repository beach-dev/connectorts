import { Env } from '../kafkautils/src/types';
interface IKafka {
    env: Env;
    url: string;
}
export interface IConfig {
    kafka: IKafka;
    rpcs?: {
        [key: string]: any;
    };
    [key: string]: any;
}
export declare function getConfig(): IConfig;
export declare function getPrometheusMetricsPort(): string;
export {};
