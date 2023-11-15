"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDescriptorFiles = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const child_process_1 = require("child_process");
function createDescriptorFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            createDescriptorFiles((0, path_1.join)(dir, file.name));
        }
        else {
            let fileSplit = file.name.split('.');
            if (fileSplit.length == 2 && fileSplit[1] == 'proto') {
                let descPath = (0, path_1.join)(dir, file.name + ".desc");
                if (fs.existsSync(descPath)) {
                    console.debug(`${file.name + ".desc"} already exists, removing..`);
                    fs.unlinkSync(descPath);
                }
                let filePath = (0, path_1.join)(dir, file.name);
                let cmd = `protoc  --include_imports --proto_path=${dir} --descriptor_set_out=${descPath} ${filePath}`;
                console.debug(`creating ${file.name + ".desc"}`);
                (0, child_process_1.exec)(cmd, (err) => {
                    if (err)
                        console.error(`failed to create descriptor file for ${file.name}. error: ${err}`);
                });
            }
        }
    }
}
exports.createDescriptorFiles = createDescriptorFiles;
