"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrometheusMetricsPort = exports.getConfig = void 0;
const types_1 = require("../kafkautils/src/types");
const yaml = require('js-yaml');
const fs = require('fs');
var config;
var configFileName;
function getConfig() {
    if (!config) {
        _init();
    }
    return config;
}
exports.getConfig = getConfig;
function setConfigDefaults() {
    config = {
        "debug": false,
        "kafka": {
            "env": types_1.Env.TEST,
            "url": ""
        },
        "prometheus": {
            "metrics": {
                "port": 9999
            }
        },
        "protoregistry": {
            "host": "localhost:9191"
        }
    };
}
function setupExternalConfig(dir) {
    if (!dir)
        return;
    try {
        config = yaml.load(fs.readFileSync(dir, 'utf8'));
    }
    catch (e) {
        console.log(e);
    }
}
// ValidateConfig validates a Viper instance.
function validateConfig(config) {
    if (!config.kafka || !config.kafka.url) {
        throw new Error('invalid config: "kafka.url" configuration parameter must be defined');
    }
}
function _init() {
    setConfigDefaults();
    if (process.env.EXTERNAL_CONFIG) {
        setupExternalConfig(process.env.EXTERNAL_CONFIG);
    }
    // Check if we're running as container on k8s
    configFileName = (process.env.KUBERNETES_SERVICE_HOST) ? "config" : (process.env.ENV) ? process.env.ENV : "local";
    // Override config with environment variables
    Object.keys(process.env).map(a => config[a] = process.env[a]);
    // env vars cannot contain .
    Object.keys(config).map(a => a.replace(".", "_"));
    // Find config.yaml in ./, $CONFIGPATH/nakji/, ~/.config/nakji/, and /etc/nakji/
    let configPath = process.env.CONFIGPATH || "$HOME/.config";
    let paths = [
        ".",
        configPath,
        configPath + "/nakji",
        "/etc/nakji",
    ];
    for (let f of paths) {
        let filepath = f + "/" + configFileName + ".yaml";
        if (fs.existsSync(filepath)) {
            setupExternalConfig(filepath);
            try {
                validateConfig(config);
            }
            catch (err) {
                console.log("error:", err);
            }
        }
    }
    // TODO 
    // InitLogging(config)
}
function getPrometheusMetricsPort() {
    return config['prometheus.metrics.port'];
}
exports.getPrometheusMetricsPort = getPrometheusMetricsPort;
