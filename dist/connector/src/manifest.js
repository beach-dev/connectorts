"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadManifest = void 0;
const SemVer = require('semver/classes/semver');
const yaml = require('js-yaml');
const fs = require('fs');
function loadManifest() {
    console.log("loading manifest");
    let yfile;
    try {
        yfile = yaml.load(fs.readFileSync("manifest.yaml", 'utf8'));
    }
    catch (e) {
        console.log("failed to open file manifest.yaml. error: " + e);
    }
    let manifest = yfile;
    if (!manifest.name || !manifest.author || !manifest.version) {
        console.log("missing name, author, and version fields from manifest.yaml.");
    }
    console.log("name: " + manifest.name + " author: " + manifest.author + " version: " + manifest.version);
    return manifest;
}
exports.loadManifest = loadManifest;
