import * as $protobuf from "protobufjs";
/** Properties of a ProxyInfo. */
export interface IProxyInfo {

    /** ProxyInfo name */
    name?: (string|null);

    /** ProxyInfo proxyProtocol */
    proxyProtocol?: (number|null);

    /** ProxyInfo onlinePlayers */
    onlinePlayers?: (number|null);

    /** ProxyInfo maxPlayers */
    maxPlayers?: (number|null);

    /** ProxyInfo motd */
    motd?: (string|null);

    /** ProxyInfo software */
    software?: (string|null);

    /** ProxyInfo auth */
    auth?: (boolean|null);

    /** ProxyInfo secret */
    secret?: (string|null);

    /** ProxyInfo isProxy */
    isProxy?: (boolean|null);
}

/** Represents a ProxyInfo. */
export class ProxyInfo implements IProxyInfo {

    /**
     * Constructs a new ProxyInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProxyInfo);

    /** ProxyInfo name. */
    public name: string;

    /** ProxyInfo proxyProtocol. */
    public proxyProtocol: number;

    /** ProxyInfo onlinePlayers. */
    public onlinePlayers: number;

    /** ProxyInfo maxPlayers. */
    public maxPlayers: number;

    /** ProxyInfo motd. */
    public motd: string;

    /** ProxyInfo software. */
    public software: string;

    /** ProxyInfo auth. */
    public auth: boolean;

    /** ProxyInfo secret. */
    public secret: string;

    /** ProxyInfo isProxy. */
    public isProxy: boolean;

    /**
     * Creates a new ProxyInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProxyInfo instance
     */
    public static create(properties?: IProxyInfo): ProxyInfo;

    /**
     * Encodes the specified ProxyInfo message. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @param message ProxyInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProxyInfo message, length delimited. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @param message ProxyInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProxyInfo;

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProxyInfo;

    /**
     * Verifies a ProxyInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProxyInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProxyInfo
     */
    public static fromObject(object: { [k: string]: any }): ProxyInfo;

    /**
     * Creates a plain object from a ProxyInfo message. Also converts values to other types if specified.
     * @param message ProxyInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProxyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProxyInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AuthResponce. */
export interface IAuthResponce {

    /** AuthResponce responce */
    responce?: (number|null);

    /** AuthResponce message */
    message?: (string|null);

    /** AuthResponce proxyVersion */
    proxyVersion?: (number|null);

    /** AuthResponce proxyVersionRev */
    proxyVersionRev?: (number|null);

    /** AuthResponce protocol */
    protocol?: (number|null);

    /** AuthResponce usePacketTranslation */
    usePacketTranslation?: (boolean|null);

    /** AuthResponce type */
    type?: (string|null);
}

/** Represents an AuthResponce. */
export class AuthResponce implements IAuthResponce {

    /**
     * Constructs a new AuthResponce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthResponce);

    /** AuthResponce responce. */
    public responce: number;

    /** AuthResponce message. */
    public message: string;

    /** AuthResponce proxyVersion. */
    public proxyVersion: number;

    /** AuthResponce proxyVersionRev. */
    public proxyVersionRev: number;

    /** AuthResponce protocol. */
    public protocol: number;

    /** AuthResponce usePacketTranslation. */
    public usePacketTranslation: boolean;

    /** AuthResponce type. */
    public type: string;

    /**
     * Creates a new AuthResponce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthResponce instance
     */
    public static create(properties?: IAuthResponce): AuthResponce;

    /**
     * Encodes the specified AuthResponce message. Does not implicitly {@link AuthResponce.verify|verify} messages.
     * @param message AuthResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthResponce message, length delimited. Does not implicitly {@link AuthResponce.verify|verify} messages.
     * @param message AuthResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthResponce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthResponce;

    /**
     * Decodes an AuthResponce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthResponce;

    /**
     * Verifies an AuthResponce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthResponce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthResponce
     */
    public static fromObject(object: { [k: string]: any }): AuthResponce;

    /**
     * Creates a plain object from an AuthResponce message. Also converts values to other types if specified.
     * @param message AuthResponce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthResponce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthResponce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Data. */
export interface IData {

    /** Data message */
    message?: (Uint8Array|null);
}

/** Represents a Data. */
export class Data implements IData {

    /**
     * Constructs a new Data.
     * @param [properties] Properties to set
     */
    constructor(properties?: IData);

    /** Data message. */
    public message: Uint8Array;

    /**
     * Creates a new Data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Data instance
     */
    public static create(properties?: IData): Data;

    /**
     * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
     * @param message Data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Data;

    /**
     * Decodes a Data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Data;

    /**
     * Verifies a Data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Data
     */
    public static fromObject(object: { [k: string]: any }): Data;

    /**
     * Creates a plain object from a Data message. Also converts values to other types if specified.
     * @param message Data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VoxelSrvMessage. */
export interface IVoxelSrvMessage {

    /** VoxelSrvMessage message */
    message?: (Uint8Array|null);
}

/** Represents a VoxelSrvMessage. */
export class VoxelSrvMessage implements IVoxelSrvMessage {

    /**
     * Constructs a new VoxelSrvMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoxelSrvMessage);

    /** VoxelSrvMessage message. */
    public message: Uint8Array;

    /**
     * Creates a new VoxelSrvMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoxelSrvMessage instance
     */
    public static create(properties?: IVoxelSrvMessage): VoxelSrvMessage;

    /**
     * Encodes the specified VoxelSrvMessage message. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
     * @param message VoxelSrvMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoxelSrvMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoxelSrvMessage message, length delimited. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
     * @param message VoxelSrvMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoxelSrvMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoxelSrvMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoxelSrvMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoxelSrvMessage;

    /**
     * Decodes a VoxelSrvMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoxelSrvMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoxelSrvMessage;

    /**
     * Verifies a VoxelSrvMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoxelSrvMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoxelSrvMessage
     */
    public static fromObject(object: { [k: string]: any }): VoxelSrvMessage;

    /**
     * Creates a plain object from a VoxelSrvMessage message. Also converts values to other types if specified.
     * @param message VoxelSrvMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoxelSrvMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoxelSrvMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Disconnect. */
export interface IDisconnect {

    /** Disconnect reason */
    reason?: (string|null);
}

/** Represents a Disconnect. */
export class Disconnect implements IDisconnect {

    /**
     * Constructs a new Disconnect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnect);

    /** Disconnect reason. */
    public reason: string;

    /**
     * Creates a new Disconnect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Disconnect instance
     */
    public static create(properties?: IDisconnect): Disconnect;

    /**
     * Encodes the specified Disconnect message. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @param message Disconnect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Disconnect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Disconnect;

    /**
     * Decodes a Disconnect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Disconnect;

    /**
     * Verifies a Disconnect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Disconnect
     */
    public static fromObject(object: { [k: string]: any }): Disconnect;

    /**
     * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
     * @param message Disconnect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Disconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Disconnect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ProxyMessage. */
export interface IProxyMessage {

    /** ProxyMessage message */
    message?: (Uint8Array|null);
}

/** Represents a ProxyMessage. */
export class ProxyMessage implements IProxyMessage {

    /**
     * Constructs a new ProxyMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProxyMessage);

    /** ProxyMessage message. */
    public message: Uint8Array;

    /**
     * Creates a new ProxyMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProxyMessage instance
     */
    public static create(properties?: IProxyMessage): ProxyMessage;

    /**
     * Encodes the specified ProxyMessage message. Does not implicitly {@link ProxyMessage.verify|verify} messages.
     * @param message ProxyMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProxyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProxyMessage message, length delimited. Does not implicitly {@link ProxyMessage.verify|verify} messages.
     * @param message ProxyMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProxyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProxyMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProxyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProxyMessage;

    /**
     * Decodes a ProxyMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProxyMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProxyMessage;

    /**
     * Verifies a ProxyMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProxyMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProxyMessage
     */
    public static fromObject(object: { [k: string]: any }): ProxyMessage;

    /**
     * Creates a plain object from a ProxyMessage message. Also converts values to other types if specified.
     * @param message ProxyMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProxyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProxyMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
