declare const SemVer: any;
export type Manifest = {
    name: string;
    author: string;
    version: typeof SemVer;
};
export declare function loadManifest(): Manifest;
export {};
