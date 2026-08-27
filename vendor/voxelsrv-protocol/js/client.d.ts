import * as $protobuf from "protobufjs";
/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse username */
    username?: (string|null);

    /** LoginResponse protocol */
    protocol?: (number|null);

    /** LoginResponse mobile */
    mobile?: (boolean|null);

    /** LoginResponse client */
    client?: (string|null);

    /** LoginResponse uuid */
    uuid?: (string|null);

    /** LoginResponse secret */
    secret?: (string|null);
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse username. */
    public username: string;

    /** LoginResponse protocol. */
    public protocol: number;

    /** LoginResponse mobile. */
    public mobile: boolean;

    /** LoginResponse client. */
    public client: string;

    /** LoginResponse uuid. */
    public uuid: string;

    /** LoginResponse secret. */
    public secret: string;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ping. */
export interface IPing {

    /** Ping time */
    time?: (number|Long|null);
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /** Ping time. */
    public time: (number|Long);

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ping;

    /**
     * Verifies a Ping message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ping
     */
    public static fromObject(object: { [k: string]: any }): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionMove. */
export interface IActionMove {

    /** ActionMove x */
    x?: (number|null);

    /** ActionMove y */
    y?: (number|null);

    /** ActionMove z */
    z?: (number|null);
}

/** Represents an ActionMove. */
export class ActionMove implements IActionMove {

    /**
     * Constructs a new ActionMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMove);

    /** ActionMove x. */
    public x: number;

    /** ActionMove y. */
    public y: number;

    /** ActionMove z. */
    public z: number;

    /**
     * Creates a new ActionMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMove instance
     */
    public static create(properties?: IActionMove): ActionMove;

    /**
     * Encodes the specified ActionMove message. Does not implicitly {@link ActionMove.verify|verify} messages.
     * @param message ActionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMove message, length delimited. Does not implicitly {@link ActionMove.verify|verify} messages.
     * @param message ActionMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMove;

    /**
     * Decodes an ActionMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMove;

    /**
     * Verifies an ActionMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMove
     */
    public static fromObject(object: { [k: string]: any }): ActionMove;

    /**
     * Creates a plain object from an ActionMove message. Also converts values to other types if specified.
     * @param message ActionMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionLook. */
export interface IActionLook {

    /** ActionLook rotation */
    rotation?: (number|null);

    /** ActionLook pitch */
    pitch?: (number|null);
}

/** Represents an ActionLook. */
export class ActionLook implements IActionLook {

    /**
     * Constructs a new ActionLook.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionLook);

    /** ActionLook rotation. */
    public rotation: number;

    /** ActionLook pitch. */
    public pitch: number;

    /**
     * Creates a new ActionLook instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionLook instance
     */
    public static create(properties?: IActionLook): ActionLook;

    /**
     * Encodes the specified ActionLook message. Does not implicitly {@link ActionLook.verify|verify} messages.
     * @param message ActionLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionLook message, length delimited. Does not implicitly {@link ActionLook.verify|verify} messages.
     * @param message ActionLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionLook message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionLook;

    /**
     * Decodes an ActionLook message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionLook;

    /**
     * Verifies an ActionLook message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionLook message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionLook
     */
    public static fromObject(object: { [k: string]: any }): ActionLook;

    /**
     * Creates a plain object from an ActionLook message. Also converts values to other types if specified.
     * @param message ActionLook
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionLook, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionLook to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionMoveLook. */
export interface IActionMoveLook {

    /** ActionMoveLook x */
    x?: (number|null);

    /** ActionMoveLook y */
    y?: (number|null);

    /** ActionMoveLook z */
    z?: (number|null);

    /** ActionMoveLook rotation */
    rotation?: (number|null);

    /** ActionMoveLook pitch */
    pitch?: (number|null);
}

/** Represents an ActionMoveLook. */
export class ActionMoveLook implements IActionMoveLook {

    /**
     * Constructs a new ActionMoveLook.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMoveLook);

    /** ActionMoveLook x. */
    public x: number;

    /** ActionMoveLook y. */
    public y: number;

    /** ActionMoveLook z. */
    public z: number;

    /** ActionMoveLook rotation. */
    public rotation: number;

    /** ActionMoveLook pitch. */
    public pitch: number;

    /**
     * Creates a new ActionMoveLook instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMoveLook instance
     */
    public static create(properties?: IActionMoveLook): ActionMoveLook;

    /**
     * Encodes the specified ActionMoveLook message. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
     * @param message ActionMoveLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMoveLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMoveLook message, length delimited. Does not implicitly {@link ActionMoveLook.verify|verify} messages.
     * @param message ActionMoveLook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMoveLook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMoveLook message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMoveLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMoveLook;

    /**
     * Decodes an ActionMoveLook message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMoveLook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMoveLook;

    /**
     * Verifies an ActionMoveLook message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMoveLook message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMoveLook
     */
    public static fromObject(object: { [k: string]: any }): ActionMoveLook;

    /**
     * Creates a plain object from an ActionMoveLook message. Also converts values to other types if specified.
     * @param message ActionMoveLook
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMoveLook, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMoveLook to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionMessage. */
export interface IActionMessage {

    /** ActionMessage message */
    message?: (string|null);
}

/** Represents an ActionMessage. */
export class ActionMessage implements IActionMessage {

    /**
     * Constructs a new ActionMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionMessage);

    /** ActionMessage message. */
    public message: string;

    /**
     * Creates a new ActionMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionMessage instance
     */
    public static create(properties?: IActionMessage): ActionMessage;

    /**
     * Encodes the specified ActionMessage message. Does not implicitly {@link ActionMessage.verify|verify} messages.
     * @param message ActionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionMessage message, length delimited. Does not implicitly {@link ActionMessage.verify|verify} messages.
     * @param message ActionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionMessage;

    /**
     * Decodes an ActionMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionMessage;

    /**
     * Verifies an ActionMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionMessage
     */
    public static fromObject(object: { [k: string]: any }): ActionMessage;

    /**
     * Creates a plain object from an ActionMessage message. Also converts values to other types if specified.
     * @param message ActionMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionBlockPlace. */
export interface IActionBlockPlace {

    /** ActionBlockPlace x */
    x?: (number|null);

    /** ActionBlockPlace y */
    y?: (number|null);

    /** ActionBlockPlace z */
    z?: (number|null);

    /** ActionBlockPlace x2 */
    x2?: (number|null);

    /** ActionBlockPlace y2 */
    y2?: (number|null);

    /** ActionBlockPlace z2 */
    z2?: (number|null);
}

/** Represents an ActionBlockPlace. */
export class ActionBlockPlace implements IActionBlockPlace {

    /**
     * Constructs a new ActionBlockPlace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionBlockPlace);

    /** ActionBlockPlace x. */
    public x: number;

    /** ActionBlockPlace y. */
    public y: number;

    /** ActionBlockPlace z. */
    public z: number;

    /** ActionBlockPlace x2. */
    public x2: number;

    /** ActionBlockPlace y2. */
    public y2: number;

    /** ActionBlockPlace z2. */
    public z2: number;

    /**
     * Creates a new ActionBlockPlace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionBlockPlace instance
     */
    public static create(properties?: IActionBlockPlace): ActionBlockPlace;

    /**
     * Encodes the specified ActionBlockPlace message. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
     * @param message ActionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionBlockPlace message, length delimited. Does not implicitly {@link ActionBlockPlace.verify|verify} messages.
     * @param message ActionBlockPlace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionBlockPlace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionBlockPlace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionBlockPlace;

    /**
     * Decodes an ActionBlockPlace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionBlockPlace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionBlockPlace;

    /**
     * Verifies an ActionBlockPlace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionBlockPlace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionBlockPlace
     */
    public static fromObject(object: { [k: string]: any }): ActionBlockPlace;

    /**
     * Creates a plain object from an ActionBlockPlace message. Also converts values to other types if specified.
     * @param message ActionBlockPlace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionBlockPlace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionBlockPlace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionBlockBreak. */
export interface IActionBlockBreak {

    /** ActionBlockBreak x */
    x?: (number|null);

    /** ActionBlockBreak y */
    y?: (number|null);

    /** ActionBlockBreak z */
    z?: (number|null);

    /** ActionBlockBreak finished */
    finished?: (boolean|null);
}

/** Represents an ActionBlockBreak. */
export class ActionBlockBreak implements IActionBlockBreak {

    /**
     * Constructs a new ActionBlockBreak.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionBlockBreak);

    /** ActionBlockBreak x. */
    public x: number;

    /** ActionBlockBreak y. */
    public y: number;

    /** ActionBlockBreak z. */
    public z: number;

    /** ActionBlockBreak finished. */
    public finished: boolean;

    /**
     * Creates a new ActionBlockBreak instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionBlockBreak instance
     */
    public static create(properties?: IActionBlockBreak): ActionBlockBreak;

    /**
     * Encodes the specified ActionBlockBreak message. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
     * @param message ActionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionBlockBreak message, length delimited. Does not implicitly {@link ActionBlockBreak.verify|verify} messages.
     * @param message ActionBlockBreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionBlockBreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionBlockBreak message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionBlockBreak;

    /**
     * Decodes an ActionBlockBreak message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionBlockBreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionBlockBreak;

    /**
     * Verifies an ActionBlockBreak message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionBlockBreak message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionBlockBreak
     */
    public static fromObject(object: { [k: string]: any }): ActionBlockBreak;

    /**
     * Creates a plain object from an ActionBlockBreak message. Also converts values to other types if specified.
     * @param message ActionBlockBreak
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionBlockBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionBlockBreak to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryClick. */
export interface IActionInventoryClick {

    /** ActionInventoryClick slot */
    slot?: (number|null);

    /** ActionInventoryClick type */
    type?: (ActionInventoryClick.Type|null);

    /** ActionInventoryClick inventory */
    inventory?: (ActionInventoryClick.TypeInv|null);
}

/** Represents an ActionInventoryClick. */
export class ActionInventoryClick implements IActionInventoryClick {

    /**
     * Constructs a new ActionInventoryClick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryClick);

    /** ActionInventoryClick slot. */
    public slot: number;

    /** ActionInventoryClick type. */
    public type: ActionInventoryClick.Type;

    /** ActionInventoryClick inventory. */
    public inventory: ActionInventoryClick.TypeInv;

    /**
     * Creates a new ActionInventoryClick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryClick instance
     */
    public static create(properties?: IActionInventoryClick): ActionInventoryClick;

    /**
     * Encodes the specified ActionInventoryClick message. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
     * @param message ActionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryClick message, length delimited. Does not implicitly {@link ActionInventoryClick.verify|verify} messages.
     * @param message ActionInventoryClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryClick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryClick;

    /**
     * Decodes an ActionInventoryClick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryClick;

    /**
     * Verifies an ActionInventoryClick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryClick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryClick
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryClick;

    /**
     * Creates a plain object from an ActionInventoryClick message. Also converts values to other types if specified.
     * @param message ActionInventoryClick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryClick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ActionInventoryClick {

    /** Type enum. */
    enum Type {
        LEFT = 0,
        RIGHT = 1,
        MIDDLE = 2,
        SELECT = 3
    }

    /** TypeInv enum. */
    enum TypeInv {
        MAIN = 0,
        ARMOR = 1,
        CRAFTING = 2,
        HOOK = 3
    }
}

/** Properties of an ActionInventoryPick. */
export interface IActionInventoryPick {

    /** ActionInventoryPick slot */
    slot?: (number|null);

    /** ActionInventoryPick slot2 */
    slot2?: (number|null);

    /** ActionInventoryPick block */
    block?: (number|null);
}

/** Represents an ActionInventoryPick. */
export class ActionInventoryPick implements IActionInventoryPick {

    /**
     * Constructs a new ActionInventoryPick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryPick);

    /** ActionInventoryPick slot. */
    public slot: number;

    /** ActionInventoryPick slot2. */
    public slot2: number;

    /** ActionInventoryPick block. */
    public block: number;

    /**
     * Creates a new ActionInventoryPick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryPick instance
     */
    public static create(properties?: IActionInventoryPick): ActionInventoryPick;

    /**
     * Encodes the specified ActionInventoryPick message. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
     * @param message ActionInventoryPick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryPick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryPick message, length delimited. Does not implicitly {@link ActionInventoryPick.verify|verify} messages.
     * @param message ActionInventoryPick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryPick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryPick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryPick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryPick;

    /**
     * Decodes an ActionInventoryPick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryPick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryPick;

    /**
     * Verifies an ActionInventoryPick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryPick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryPick
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryPick;

    /**
     * Creates a plain object from an ActionInventoryPick message. Also converts values to other types if specified.
     * @param message ActionInventoryPick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryPick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryPick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionInventoryOpen. */
export interface IActionInventoryOpen {

    /** ActionInventoryOpen inventory */
    inventory?: (ActionInventoryOpen.Type|null);
}

/** Represents an ActionInventoryOpen. */
export class ActionInventoryOpen implements IActionInventoryOpen {

    /**
     * Constructs a new ActionInventoryOpen.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryOpen);

    /** ActionInventoryOpen inventory. */
    public inventory: ActionInventoryOpen.Type;

    /**
     * Creates a new ActionInventoryOpen instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryOpen instance
     */
    public static create(properties?: IActionInventoryOpen): ActionInventoryOpen;

    /**
     * Encodes the specified ActionInventoryOpen message. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
     * @param message ActionInventoryOpen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryOpen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryOpen message, length delimited. Does not implicitly {@link ActionInventoryOpen.verify|verify} messages.
     * @param message ActionInventoryOpen message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryOpen, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryOpen message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryOpen;

    /**
     * Decodes an ActionInventoryOpen message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryOpen;

    /**
     * Verifies an ActionInventoryOpen message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryOpen message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryOpen
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryOpen;

    /**
     * Creates a plain object from an ActionInventoryOpen message. Also converts values to other types if specified.
     * @param message ActionInventoryOpen
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryOpen, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryOpen to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ActionInventoryOpen {

    /** Type enum. */
    enum Type {
        MAIN = 0,
        CHEST = 1,
        CRAFTING = 2,
        FURNACE = 3
    }
}

/** Properties of an ActionInventoryClose. */
export interface IActionInventoryClose {

    /** ActionInventoryClose inventory */
    inventory?: (ActionInventoryClose.Type|null);
}

/** Represents an ActionInventoryClose. */
export class ActionInventoryClose implements IActionInventoryClose {

    /**
     * Constructs a new ActionInventoryClose.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionInventoryClose);

    /** ActionInventoryClose inventory. */
    public inventory: ActionInventoryClose.Type;

    /**
     * Creates a new ActionInventoryClose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionInventoryClose instance
     */
    public static create(properties?: IActionInventoryClose): ActionInventoryClose;

    /**
     * Encodes the specified ActionInventoryClose message. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
     * @param message ActionInventoryClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionInventoryClose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionInventoryClose message, length delimited. Does not implicitly {@link ActionInventoryClose.verify|verify} messages.
     * @param message ActionInventoryClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionInventoryClose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionInventoryClose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionInventoryClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionInventoryClose;

    /**
     * Decodes an ActionInventoryClose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionInventoryClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionInventoryClose;

    /**
     * Verifies an ActionInventoryClose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionInventoryClose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionInventoryClose
     */
    public static fromObject(object: { [k: string]: any }): ActionInventoryClose;

    /**
     * Creates a plain object from an ActionInventoryClose message. Also converts values to other types if specified.
     * @param message ActionInventoryClose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionInventoryClose, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionInventoryClose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ActionInventoryClose {

    /** Type enum. */
    enum Type {
        MAIN = 0,
        CHEST = 1,
        CRAFTING = 2,
        FURNACE = 3
    }
}

/** Properties of an ActionClick. */
export interface IActionClick {

    /** ActionClick x */
    x?: (number|null);

    /** ActionClick y */
    y?: (number|null);

    /** ActionClick z */
    z?: (number|null);

    /** ActionClick type */
    type?: (string|null);

    /** ActionClick onBlock */
    onBlock?: (boolean|null);
}

/** Represents an ActionClick. */
export class ActionClick implements IActionClick {

    /**
     * Constructs a new ActionClick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionClick);

    /** ActionClick x. */
    public x: number;

    /** ActionClick y. */
    public y: number;

    /** ActionClick z. */
    public z: number;

    /** ActionClick type. */
    public type: string;

    /** ActionClick onBlock. */
    public onBlock: boolean;

    /**
     * Creates a new ActionClick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionClick instance
     */
    public static create(properties?: IActionClick): ActionClick;

    /**
     * Encodes the specified ActionClick message. Does not implicitly {@link ActionClick.verify|verify} messages.
     * @param message ActionClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionClick message, length delimited. Does not implicitly {@link ActionClick.verify|verify} messages.
     * @param message ActionClick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionClick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionClick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionClick;

    /**
     * Decodes an ActionClick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionClick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionClick;

    /**
     * Verifies an ActionClick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionClick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionClick
     */
    public static fromObject(object: { [k: string]: any }): ActionClick;

    /**
     * Creates a plain object from an ActionClick message. Also converts values to other types if specified.
     * @param message ActionClick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionClick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionClickEntity. */
export interface IActionClickEntity {

    /** ActionClickEntity uuid */
    uuid?: (string|null);

    /** ActionClickEntity type */
    type?: (string|null);

    /** ActionClickEntity distance */
    distance?: (number|null);
}

/** Represents an ActionClickEntity. */
export class ActionClickEntity implements IActionClickEntity {

    /**
     * Constructs a new ActionClickEntity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionClickEntity);

    /** ActionClickEntity uuid. */
    public uuid: string;

    /** ActionClickEntity type. */
    public type: string;

    /** ActionClickEntity distance. */
    public distance: number;

    /**
     * Creates a new ActionClickEntity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionClickEntity instance
     */
    public static create(properties?: IActionClickEntity): ActionClickEntity;

    /**
     * Encodes the specified ActionClickEntity message. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
     * @param message ActionClickEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionClickEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionClickEntity message, length delimited. Does not implicitly {@link ActionClickEntity.verify|verify} messages.
     * @param message ActionClickEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionClickEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionClickEntity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionClickEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionClickEntity;

    /**
     * Decodes an ActionClickEntity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionClickEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionClickEntity;

    /**
     * Verifies an ActionClickEntity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionClickEntity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionClickEntity
     */
    public static fromObject(object: { [k: string]: any }): ActionClickEntity;

    /**
     * Creates a plain object from an ActionClickEntity message. Also converts values to other types if specified.
     * @param message ActionClickEntity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionClickEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionClickEntity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActionKeyPress. */
export interface IActionKeyPress {

    /** ActionKeyPress key */
    key?: (string|null);

    /** ActionKeyPress type */
    type?: (boolean|null);
}

/** Represents an ActionKeyPress. */
export class ActionKeyPress implements IActionKeyPress {

    /**
     * Constructs a new ActionKeyPress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionKeyPress);

    /** ActionKeyPress key. */
    public key: string;

    /** ActionKeyPress type. */
    public type: boolean;

    /**
     * Creates a new ActionKeyPress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionKeyPress instance
     */
    public static create(properties?: IActionKeyPress): ActionKeyPress;

    /**
     * Encodes the specified ActionKeyPress message. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
     * @param message ActionKeyPress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionKeyPress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionKeyPress message, length delimited. Does not implicitly {@link ActionKeyPress.verify|verify} messages.
     * @param message ActionKeyPress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionKeyPress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionKeyPress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionKeyPress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionKeyPress;

    /**
     * Decodes an ActionKeyPress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionKeyPress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionKeyPress;

    /**
     * Verifies an ActionKeyPress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionKeyPress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionKeyPress
     */
    public static fromObject(object: { [k: string]: any }): ActionKeyPress;

    /**
     * Creates a plain object from an ActionKeyPress message. Also converts values to other types if specified.
     * @param message ActionKeyPress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionKeyPress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionKeyPress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WorldChunkIsLoadedResponce. */
export interface IWorldChunkIsLoadedResponce {

    /** WorldChunkIsLoadedResponce x */
    x?: (number|null);

    /** WorldChunkIsLoadedResponce y */
    y?: (number|null);

    /** WorldChunkIsLoadedResponce z */
    z?: (number|null);

    /** WorldChunkIsLoadedResponce loaded */
    loaded?: (boolean|null);
}

/** Represents a WorldChunkIsLoadedResponce. */
export class WorldChunkIsLoadedResponce implements IWorldChunkIsLoadedResponce {

    /**
     * Constructs a new WorldChunkIsLoadedResponce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWorldChunkIsLoadedResponce);

    /** WorldChunkIsLoadedResponce x. */
    public x: number;

    /** WorldChunkIsLoadedResponce y. */
    public y: number;

    /** WorldChunkIsLoadedResponce z. */
    public z: number;

    /** WorldChunkIsLoadedResponce loaded. */
    public loaded: boolean;

    /**
     * Creates a new WorldChunkIsLoadedResponce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WorldChunkIsLoadedResponce instance
     */
    public static create(properties?: IWorldChunkIsLoadedResponce): WorldChunkIsLoadedResponce;

    /**
     * Encodes the specified WorldChunkIsLoadedResponce message. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
     * @param message WorldChunkIsLoadedResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWorldChunkIsLoadedResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WorldChunkIsLoadedResponce message, length delimited. Does not implicitly {@link WorldChunkIsLoadedResponce.verify|verify} messages.
     * @param message WorldChunkIsLoadedResponce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWorldChunkIsLoadedResponce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WorldChunkIsLoadedResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WorldChunkIsLoadedResponce;

    /**
     * Decodes a WorldChunkIsLoadedResponce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WorldChunkIsLoadedResponce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WorldChunkIsLoadedResponce;

    /**
     * Verifies a WorldChunkIsLoadedResponce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WorldChunkIsLoadedResponce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WorldChunkIsLoadedResponce
     */
    public static fromObject(object: { [k: string]: any }): WorldChunkIsLoadedResponce;

    /**
     * Creates a plain object from a WorldChunkIsLoadedResponce message. Also converts values to other types if specified.
     * @param message WorldChunkIsLoadedResponce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WorldChunkIsLoadedResponce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WorldChunkIsLoadedResponce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PluginMessage. */
export interface IPluginMessage {

    /** PluginMessage key */
    key?: (string|null);

    /** PluginMessage version */
    version?: (number|null);

    /** PluginMessage value */
    value?: (Uint8Array|null);
}

/** Represents a PluginMessage. */
export class PluginMessage implements IPluginMessage {

    /**
     * Constructs a new PluginMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginMessage);

    /** PluginMessage key. */
    public key: string;

    /** PluginMessage version. */
    public version: number;

    /** PluginMessage value. */
    public value: Uint8Array;

    /**
     * Creates a new PluginMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginMessage instance
     */
    public static create(properties?: IPluginMessage): PluginMessage;

    /**
     * Encodes the specified PluginMessage message. Does not implicitly {@link PluginMessage.verify|verify} messages.
     * @param message PluginMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PluginMessage message, length delimited. Does not implicitly {@link PluginMessage.verify|verify} messages.
     * @param message PluginMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPluginMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginMessage;

    /**
     * Decodes a PluginMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PluginMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PluginMessage;

    /**
     * Verifies a PluginMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PluginMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginMessage
     */
    public static fromObject(object: { [k: string]: any }): PluginMessage;

    /**
     * Creates a plain object from a PluginMessage message. Also converts values to other types if specified.
     * @param message PluginMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PluginMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
