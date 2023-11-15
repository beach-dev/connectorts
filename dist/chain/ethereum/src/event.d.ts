export declare enum InputType {
    ADDRESS = "address",
    UINT256 = "uint256",
    UINT32 = "uint256",
    UINT16 = "uint16",
    BOOL = "bool"
}
export declare function parseInput(inputType: string, value: any): any;
