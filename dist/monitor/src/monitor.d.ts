export declare class Monitor {
    private kafkaLastWriteTime;
    private connectorName;
    private constructor();
    static startMonitor(name: string): Promise<Monitor>;
    setMetricsForKafkaLastWriteTime(): Promise<void>;
}
