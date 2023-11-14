"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manifest_1 = require("../src/manifest");
test('loads manifest and checks values', function () {
    var m = (0, manifest_1.loadManifest)();
    expect(m['name']).toBe('candymachine');
    expect(m['author']).toBe('nakji');
});
