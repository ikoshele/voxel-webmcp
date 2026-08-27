/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.AuthRequest = (function() {
    
        /**
         * Properties of an AuthRequest.
         * @exports IAuthRequest
         * @interface IAuthRequest
         * @property {string|null} [username] AuthRequest username
         * @property {number|null} [protocol] AuthRequest protocol
         * @property {string|null} [client] AuthRequest client
         * @property {string|null} [uuid] AuthRequest uuid
         * @property {string|null} [secret] AuthRequest secret
         * @property {string|null} [serverId] AuthRequest serverId
         * @property {number|null} [proxySupportedVersion] AuthRequest proxySupportedVersion
         */
    
        /**
         * Constructs a new AuthRequest.
         * @exports AuthRequest
         * @classdesc Represents an AuthRequest.
         * @implements IAuthRequest
         * @constructor
         * @param {IAuthRequest=} [properties] Properties to set
         */
        function AuthRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AuthRequest username.
         * @member {string} username
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.username = "";
    
        /**
         * AuthRequest protocol.
         * @member {number} protocol
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.protocol = 0;
    
        /**
         * AuthRequest client.
         * @member {string} client
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.client = "";
    
        /**
         * AuthRequest uuid.
         * @member {string} uuid
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.uuid = "";
    
        /**
         * AuthRequest secret.
         * @member {string} secret
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.secret = "";
    
        /**
         * AuthRequest serverId.
         * @member {string} serverId
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.serverId = "";
    
        /**
         * AuthRequest proxySupportedVersion.
         * @member {number} proxySupportedVersion
         * @memberof AuthRequest
         * @instance
         */
        AuthRequest.prototype.proxySupportedVersion = 0;
    
        /**
         * Creates a new AuthRequest instance using the specified properties.
         * @function create
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest=} [properties] Properties to set
         * @returns {AuthRequest} AuthRequest instance
         */
        AuthRequest.create = function create(properties) {
            return new AuthRequest(properties);
        };
    
        /**
         * Encodes the specified AuthRequest message. Does not implicitly {@link AuthRequest.verify|verify} messages.
         * @function encode
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protocol);
            if (message.client != null && Object.hasOwnProperty.call(message, "client"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client);
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.uuid);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.secret);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.serverId);
            if (message.proxySupportedVersion != null && Object.hasOwnProperty.call(message, "proxySupportedVersion"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.proxySupportedVersion);
            return writer;
        };
    
        /**
         * Encodes the specified AuthRequest message, length delimited. Does not implicitly {@link AuthRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AuthRequest
         * @static
         * @param {IAuthRequest} message AuthRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AuthRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.protocol = reader.uint32();
                    break;
                case 3:
                    message.client = reader.string();
                    break;
                case 4:
                    message.uuid = reader.string();
                    break;
                case 5:
                    message.secret = reader.string();
                    break;
                case 6:
                    message.serverId = reader.string();
                    break;
                case 7:
                    message.proxySupportedVersion = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AuthRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AuthRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AuthRequest} AuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AuthRequest message.
         * @function verify
         * @memberof AuthRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.client != null && message.hasOwnProperty("client"))
                if (!$util.isString(message.client))
                    return "client: string expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isString(message.serverId))
                    return "serverId: string expected";
            if (message.proxySupportedVersion != null && message.hasOwnProperty("proxySupportedVersion"))
                if (!$util.isInteger(message.proxySupportedVersion))
                    return "proxySupportedVersion: integer expected";
            return null;
        };
    
        /**
         * Creates an AuthRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AuthRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AuthRequest} AuthRequest
         */
        AuthRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.AuthRequest)
                return object;
            var message = new $root.AuthRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.client != null)
                message.client = String(object.client);
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.secret != null)
                message.secret = String(object.secret);
            if (object.serverId != null)
                message.serverId = String(object.serverId);
            if (object.proxySupportedVersion != null)
                message.proxySupportedVersion = object.proxySupportedVersion >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from an AuthRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AuthRequest
         * @static
         * @param {AuthRequest} message AuthRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.protocol = 0;
                object.client = "";
                object.uuid = "";
                object.secret = "";
                object.serverId = "";
                object.proxySupportedVersion = 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.client != null && message.hasOwnProperty("client"))
                object.client = message.client;
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.proxySupportedVersion != null && message.hasOwnProperty("proxySupportedVersion"))
                object.proxySupportedVersion = message.proxySupportedVersion;
            return object;
        };
    
        /**
         * Converts this AuthRequest to JSON.
         * @function toJSON
         * @memberof AuthRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return AuthRequest;
    })();
    
    $root.Ready = (function() {
    
        /**
         * Properties of a Ready.
         * @exports IReady
         * @interface IReady
         * @property {boolean|null} [ready] Ready ready
         */
    
        /**
         * Constructs a new Ready.
         * @exports Ready
         * @classdesc Represents a Ready.
         * @implements IReady
         * @constructor
         * @param {IReady=} [properties] Properties to set
         */
        function Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ready ready.
         * @member {boolean} ready
         * @memberof Ready
         * @instance
         */
        Ready.prototype.ready = false;
    
        /**
         * Creates a new Ready instance using the specified properties.
         * @function create
         * @memberof Ready
         * @static
         * @param {IReady=} [properties] Properties to set
         * @returns {Ready} Ready instance
         */
        Ready.create = function create(properties) {
            return new Ready(properties);
        };
    
        /**
         * Encodes the specified Ready message. Does not implicitly {@link Ready.verify|verify} messages.
         * @function encode
         * @memberof Ready
         * @static
         * @param {IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ready);
            return writer;
        };
    
        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ready
         * @static
         * @param {IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @function decode
         * @memberof Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ready = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ready message.
         * @function verify
         * @memberof Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ready != null && message.hasOwnProperty("ready"))
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
            return null;
        };
    
        /**
         * Creates a Ready message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ready
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ready} Ready
         */
        Ready.fromObject = function fromObject(object) {
            if (object instanceof $root.Ready)
                return object;
            var message = new $root.Ready();
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            return message;
        };
    
        /**
         * Creates a plain object from a Ready message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ready
         * @static
         * @param {Ready} message Ready
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ready.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ready = false;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            return object;
        };
    
        /**
         * Converts this Ready to JSON.
         * @function toJSON
         * @memberof Ready
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ready.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ready;
    })();
    
    $root.Data = (function() {
    
        /**
         * Properties of a Data.
         * @exports IData
         * @interface IData
         * @property {Uint8Array|null} [message] Data message
         */
    
        /**
         * Constructs a new Data.
         * @exports Data
         * @classdesc Represents a Data.
         * @implements IData
         * @constructor
         * @param {IData=} [properties] Properties to set
         */
        function Data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Data message.
         * @member {Uint8Array} message
         * @memberof Data
         * @instance
         */
        Data.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new Data instance using the specified properties.
         * @function create
         * @memberof Data
         * @static
         * @param {IData=} [properties] Properties to set
         * @returns {Data} Data instance
         */
        Data.create = function create(properties) {
            return new Data(properties);
        };
    
        /**
         * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
         * @function encode
         * @memberof Data
         * @static
         * @param {IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Data
         * @static
         * @param {IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Data message from the specified reader or buffer.
         * @function decode
         * @memberof Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Data message.
         * @function verify
         * @memberof Data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Data} Data
         */
        Data.fromObject = function fromObject(object) {
            if (object instanceof $root.Data)
                return object;
            var message = new $root.Data();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Data
         * @static
         * @param {Data} message Data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this Data to JSON.
         * @function toJSON
         * @memberof Data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Data;
    })();
    
    $root.VoxelSrvMessage = (function() {
    
        /**
         * Properties of a VoxelSrvMessage.
         * @exports IVoxelSrvMessage
         * @interface IVoxelSrvMessage
         * @property {Uint8Array|null} [message] VoxelSrvMessage message
         */
    
        /**
         * Constructs a new VoxelSrvMessage.
         * @exports VoxelSrvMessage
         * @classdesc Represents a VoxelSrvMessage.
         * @implements IVoxelSrvMessage
         * @constructor
         * @param {IVoxelSrvMessage=} [properties] Properties to set
         */
        function VoxelSrvMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * VoxelSrvMessage message.
         * @member {Uint8Array} message
         * @memberof VoxelSrvMessage
         * @instance
         */
        VoxelSrvMessage.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new VoxelSrvMessage instance using the specified properties.
         * @function create
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage=} [properties] Properties to set
         * @returns {VoxelSrvMessage} VoxelSrvMessage instance
         */
        VoxelSrvMessage.create = function create(properties) {
            return new VoxelSrvMessage(properties);
        };
    
        /**
         * Encodes the specified VoxelSrvMessage message. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
         * @function encode
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage} message VoxelSrvMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoxelSrvMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified VoxelSrvMessage message, length delimited. Does not implicitly {@link VoxelSrvMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VoxelSrvMessage
         * @static
         * @param {IVoxelSrvMessage} message VoxelSrvMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoxelSrvMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a VoxelSrvMessage message from the specified reader or buffer.
         * @function decode
         * @memberof VoxelSrvMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoxelSrvMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VoxelSrvMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a VoxelSrvMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VoxelSrvMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoxelSrvMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a VoxelSrvMessage message.
         * @function verify
         * @memberof VoxelSrvMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoxelSrvMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a VoxelSrvMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VoxelSrvMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VoxelSrvMessage} VoxelSrvMessage
         */
        VoxelSrvMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.VoxelSrvMessage)
                return object;
            var message = new $root.VoxelSrvMessage();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a VoxelSrvMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VoxelSrvMessage
         * @static
         * @param {VoxelSrvMessage} message VoxelSrvMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoxelSrvMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this VoxelSrvMessage to JSON.
         * @function toJSON
         * @memberof VoxelSrvMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoxelSrvMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return VoxelSrvMessage;
    })();
    
    $root.ProxyMessage = (function() {
    
        /**
         * Properties of a ProxyMessage.
         * @exports IProxyMessage
         * @interface IProxyMessage
         * @property {Uint8Array|null} [message] ProxyMessage message
         */
    
        /**
         * Constructs a new ProxyMessage.
         * @exports ProxyMessage
         * @classdesc Represents a ProxyMessage.
         * @implements IProxyMessage
         * @constructor
         * @param {IProxyMessage=} [properties] Properties to set
         */
        function ProxyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ProxyMessage message.
         * @member {Uint8Array} message
         * @memberof ProxyMessage
         * @instance
         */
        ProxyMessage.prototype.message = $util.newBuffer([]);
    
        /**
         * Creates a new ProxyMessage instance using the specified properties.
         * @function create
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage=} [properties] Properties to set
         * @returns {ProxyMessage} ProxyMessage instance
         */
        ProxyMessage.create = function create(properties) {
            return new ProxyMessage(properties);
        };
    
        /**
         * Encodes the specified ProxyMessage message. Does not implicitly {@link ProxyMessage.verify|verify} messages.
         * @function encode
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage} message ProxyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified ProxyMessage message, length delimited. Does not implicitly {@link ProxyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProxyMessage
         * @static
         * @param {IProxyMessage} message ProxyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ProxyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProxyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProxyMessage} ProxyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProxyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ProxyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProxyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProxyMessage} ProxyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ProxyMessage message.
         * @function verify
         * @memberof ProxyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProxyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            return null;
        };
    
        /**
         * Creates a ProxyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProxyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProxyMessage} ProxyMessage
         */
        ProxyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProxyMessage)
                return object;
            var message = new $root.ProxyMessage();
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            return message;
        };
    
        /**
         * Creates a plain object from a ProxyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProxyMessage
         * @static
         * @param {ProxyMessage} message ProxyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProxyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            return object;
        };
    
        /**
         * Converts this ProxyMessage to JSON.
         * @function toJSON
         * @memberof ProxyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProxyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ProxyMessage;
    })();

    return $root;
});
