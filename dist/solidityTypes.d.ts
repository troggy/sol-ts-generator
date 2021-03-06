declare const bytesTypes: ("bytes" | "bytes1" | "bytes2" | "bytes3" | "bytes4" | "bytes5" | "bytes6" | "bytes7" | "bytes8" | "bytes9" | "bytes10" | "bytes11" | "bytes12" | "bytes13" | "bytes14" | "bytes15" | "bytes16" | "bytes17" | "bytes18" | "bytes19" | "bytes20" | "bytes21" | "bytes22" | "bytes23" | "bytes24" | "bytes25" | "bytes26" | "bytes27" | "bytes28" | "bytes29" | "bytes30" | "bytes31" | "bytes32")[];
declare type SolidityBytesType = typeof bytesTypes[number];
declare const uintTypes: ("uint8" | "uint16" | "uint24" | "uint32" | "uint40" | "uint48" | "uint56" | "uint64" | "uint72" | "uint80" | "uint88" | "uint96" | "uint104" | "uint112" | "uint120" | "uint128" | "uint136" | "uint144" | "uint152" | "uint160" | "uint168" | "uint176" | "uint184" | "uint192" | "uint200" | "uint208" | "uint216" | "uint224" | "uint232" | "uint240" | "uint248" | "uint256")[];
declare type SolidityUintType = typeof uintTypes[number];
declare const uintArrayTypes: ("uint8[]" | "uint16[]" | "uint24[]" | "uint32[]" | "uint40[]" | "uint48[]" | "uint56[]" | "uint64[]" | "uint72[]" | "uint80[]" | "uint88[]" | "uint96[]" | "uint104[]" | "uint112[]" | "uint120[]" | "uint128[]" | "uint136[]" | "uint144[]" | "uint152[]" | "uint160[]" | "uint168[]" | "uint176[]" | "uint184[]" | "uint192[]" | "uint200[]" | "uint208[]" | "uint216[]" | "uint224[]" | "uint232[]" | "uint240[]" | "uint248[]" | "uint256[]")[];
declare type SolidityUintArrayType = typeof uintArrayTypes[number];
export declare type SolidityType = "address" | "address[]" | "bool" | "string" | SolidityUintArrayType | SolidityBytesType | SolidityUintType;
export declare type JSType = "string" | "UInt" | "UInt[]" | "Address" | "Address[]" | "boolean" | "BigNumber.BigNumber[]" | "BigNumber.BigNumber";
export declare const getMappings: () => Map<SolidityType, JSType>;
export declare const getOutputMappings: () => Map<SolidityType, JSType>;
export {};
