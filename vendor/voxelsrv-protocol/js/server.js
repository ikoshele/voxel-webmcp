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
    
    $root.LoginRequest = (function() {
    
        /**
         * Properties of a LoginRequest.
         * @exports ILoginRequest
         * @interface ILoginRequest
         * @property {string|null} [name] LoginRequest name
         * @property {number|null} [protocol] LoginRequest protocol
         * @property {number|null} [onlinePlayers] LoginRequest onlinePlayers
         * @property {number|null} [maxPlayers] LoginRequest maxPlayers
         * @property {string|null} [motd] LoginRequest motd
         * @property {string|null} [software] LoginRequest software
         * @property {boolean|null} [auth] LoginRequest auth
         * @property {string|null} [secret] LoginRequest secret
         */
    
        /**
         * Constructs a new LoginRequest.
         * @exports LoginRequest
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginRequest name.
         * @member {string} name
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.name = "";
    
        /**
         * LoginRequest protocol.
         * @member {number} protocol
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.protocol = 0;
    
        /**
         * LoginRequest onlinePlayers.
         * @member {number} onlinePlayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.onlinePlayers = 0;
    
        /**
         * LoginRequest maxPlayers.
         * @member {number} maxPlayers
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.maxPlayers = 0;
    
        /**
         * LoginRequest motd.
         * @member {string} motd
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.motd = "";
    
        /**
         * LoginRequest software.
         * @member {string} software
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.software = "";
    
        /**
         * LoginRequest auth.
         * @member {boolean} auth
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.auth = false;
    
        /**
         * LoginRequest secret.
         * @member {string} secret
         * @memberof LoginRequest
         * @instance
         */
        LoginRequest.prototype.secret = "";
    
        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest=} [properties] Properties to set
         * @returns {LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };
    
        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protocol);
            if (message.onlinePlayers != null && Object.hasOwnProperty.call(message, "onlinePlayers"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.onlinePlayers);
            if (message.maxPlayers != null && Object.hasOwnProperty.call(message, "maxPlayers"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxPlayers);
            if (message.motd != null && Object.hasOwnProperty.call(message, "motd"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.motd);
            if (message.software != null && Object.hasOwnProperty.call(message, "software"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.software);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.auth);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.secret);
            return writer;
        };
    
        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginRequest
         * @static
         * @param {ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.protocol = reader.uint32();
                    break;
                case 3:
                    message.onlinePlayers = reader.uint32();
                    break;
                case 4:
                    message.maxPlayers = reader.uint32();
                    break;
                case 5:
                    message.motd = reader.string();
                    break;
                case 6:
                    message.software = reader.string();
                    break;
                case 7:
                    message.auth = reader.bool();
                    break;
                case 8:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                if (!$util.isInteger(message.onlinePlayers))
                    return "onlinePlayers: integer expected";
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            if (message.motd != null && message.hasOwnProperty("motd"))
                if (!$util.isString(message.motd))
                    return "motd: string expected";
            if (message.software != null && message.hasOwnProperty("software"))
                if (!$util.isString(message.software))
                    return "software: string expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                if (typeof message.auth !== "boolean")
                    return "auth: boolean expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            return null;
        };
    
        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginRequest)
                return object;
            var message = new $root.LoginRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.protocol != null)
                message.protocol = object.protocol >>> 0;
            if (object.onlinePlayers != null)
                message.onlinePlayers = object.onlinePlayers >>> 0;
            if (object.maxPlayers != null)
                message.maxPlayers = object.maxPlayers >>> 0;
            if (object.motd != null)
                message.motd = String(object.motd);
            if (object.software != null)
                message.software = String(object.software);
            if (object.auth != null)
                message.auth = Boolean(object.auth);
            if (object.secret != null)
                message.secret = String(object.secret);
            return message;
        };
    
        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginRequest
         * @static
         * @param {LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.protocol = 0;
                object.onlinePlayers = 0;
                object.maxPlayers = 0;
                object.motd = "";
                object.software = "";
                object.auth = false;
                object.secret = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.onlinePlayers != null && message.hasOwnProperty("onlinePlayers"))
                object.onlinePlayers = message.onlinePlayers;
            if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            if (message.motd != null && message.hasOwnProperty("motd"))
                object.motd = message.motd;
            if (message.software != null && message.hasOwnProperty("software"))
                object.software = message.software;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = message.auth;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            return object;
        };
    
        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginRequest;
    })();
    
    $root.LoginStatus = (function() {
    
        /**
         * Properties of a LoginStatus.
         * @exports ILoginStatus
         * @interface ILoginStatus
         * @property {string|null} [message] LoginStatus message
         * @property {number|Long|null} [time] LoginStatus time
         */
    
        /**
         * Constructs a new LoginStatus.
         * @exports LoginStatus
         * @classdesc Represents a LoginStatus.
         * @implements ILoginStatus
         * @constructor
         * @param {ILoginStatus=} [properties] Properties to set
         */
        function LoginStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginStatus message.
         * @member {string} message
         * @memberof LoginStatus
         * @instance
         */
        LoginStatus.prototype.message = "";
    
        /**
         * LoginStatus time.
         * @member {number|Long} time
         * @memberof LoginStatus
         * @instance
         */
        LoginStatus.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new LoginStatus instance using the specified properties.
         * @function create
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus=} [properties] Properties to set
         * @returns {LoginStatus} LoginStatus instance
         */
        LoginStatus.create = function create(properties) {
            return new LoginStatus(properties);
        };
    
        /**
         * Encodes the specified LoginStatus message. Does not implicitly {@link LoginStatus.verify|verify} messages.
         * @function encode
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus} message LoginStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified LoginStatus message, length delimited. Does not implicitly {@link LoginStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginStatus
         * @static
         * @param {ILoginStatus} message LoginStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginStatus message from the specified reader or buffer.
         * @function decode
         * @memberof LoginStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginStatus} LoginStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginStatus} LoginStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginStatus message.
         * @function verify
         * @memberof LoginStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a LoginStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginStatus} LoginStatus
         */
        LoginStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginStatus)
                return object;
            var message = new $root.LoginStatus();
            if (object.message != null)
                message.message = String(object.message);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a LoginStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginStatus
         * @static
         * @param {LoginStatus} message LoginStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this LoginStatus to JSON.
         * @function toJSON
         * @memberof LoginStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginStatus;
    })();
    
    $root.LoginSuccess = (function() {
    
        /**
         * Properties of a LoginSuccess.
         * @exports ILoginSuccess
         * @interface ILoginSuccess
         * @property {number|null} [xPos] LoginSuccess xPos
         * @property {number|null} [yPos] LoginSuccess yPos
         * @property {number|null} [zPos] LoginSuccess zPos
         * @property {string|null} [itemsDef] LoginSuccess itemsDef
         * @property {string|null} [blocksDef] LoginSuccess blocksDef
         * @property {string|null} [inventory] LoginSuccess inventory
         * @property {string|null} [armor] LoginSuccess armor
         * @property {string|null} [movement] LoginSuccess movement
         */
    
        /**
         * Constructs a new LoginSuccess.
         * @exports LoginSuccess
         * @classdesc Represents a LoginSuccess.
         * @implements ILoginSuccess
         * @constructor
         * @param {ILoginSuccess=} [properties] Properties to set
         */
        function LoginSuccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LoginSuccess xPos.
         * @member {number} xPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.xPos = 0;
    
        /**
         * LoginSuccess yPos.
         * @member {number} yPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.yPos = 0;
    
        /**
         * LoginSuccess zPos.
         * @member {number} zPos
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.zPos = 0;
    
        /**
         * LoginSuccess itemsDef.
         * @member {string} itemsDef
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.itemsDef = "";
    
        /**
         * LoginSuccess blocksDef.
         * @member {string} blocksDef
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.blocksDef = "";
    
        /**
         * LoginSuccess inventory.
         * @member {string} inventory
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.inventory = "";
    
        /**
         * LoginSuccess armor.
         * @member {string} armor
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.armor = "";
    
        /**
         * LoginSuccess movement.
         * @member {string} movement
         * @memberof LoginSuccess
         * @instance
         */
        LoginSuccess.prototype.movement = "";
    
        /**
         * Creates a new LoginSuccess instance using the specified properties.
         * @function create
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess=} [properties] Properties to set
         * @returns {LoginSuccess} LoginSuccess instance
         */
        LoginSuccess.create = function create(properties) {
            return new LoginSuccess(properties);
        };
    
        /**
         * Encodes the specified LoginSuccess message. Does not implicitly {@link LoginSuccess.verify|verify} messages.
         * @function encode
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.xPos != null && Object.hasOwnProperty.call(message, "xPos"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.xPos);
            if (message.yPos != null && Object.hasOwnProperty.call(message, "yPos"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.yPos);
            if (message.zPos != null && Object.hasOwnProperty.call(message, "zPos"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.zPos);
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.blocksDef);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.inventory);
            if (message.armor != null && Object.hasOwnProperty.call(message, "armor"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.armor);
            if (message.movement != null && Object.hasOwnProperty.call(message, "movement"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.movement);
            return writer;
        };
    
        /**
         * Encodes the specified LoginSuccess message, length delimited. Does not implicitly {@link LoginSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginSuccess
         * @static
         * @param {ILoginSuccess} message LoginSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LoginSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.xPos = reader.double();
                    break;
                case 2:
                    message.yPos = reader.double();
                    break;
                case 3:
                    message.zPos = reader.double();
                    break;
                case 4:
                    message.itemsDef = reader.string();
                    break;
                case 5:
                    message.blocksDef = reader.string();
                    break;
                case 6:
                    message.inventory = reader.string();
                    break;
                case 7:
                    message.armor = reader.string();
                    break;
                case 8:
                    message.movement = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LoginSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginSuccess} LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LoginSuccess message.
         * @function verify
         * @memberof LoginSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.xPos != null && message.hasOwnProperty("xPos"))
                if (typeof message.xPos !== "number")
                    return "xPos: number expected";
            if (message.yPos != null && message.hasOwnProperty("yPos"))
                if (typeof message.yPos !== "number")
                    return "yPos: number expected";
            if (message.zPos != null && message.hasOwnProperty("zPos"))
                if (typeof message.zPos !== "number")
                    return "zPos: number expected";
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                if (!$util.isString(message.itemsDef))
                    return "itemsDef: string expected";
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                if (!$util.isString(message.blocksDef))
                    return "blocksDef: string expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            if (message.armor != null && message.hasOwnProperty("armor"))
                if (!$util.isString(message.armor))
                    return "armor: string expected";
            if (message.movement != null && message.hasOwnProperty("movement"))
                if (!$util.isString(message.movement))
                    return "movement: string expected";
            return null;
        };
    
        /**
         * Creates a LoginSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginSuccess} LoginSuccess
         */
        LoginSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginSuccess)
                return object;
            var message = new $root.LoginSuccess();
            if (object.xPos != null)
                message.xPos = Number(object.xPos);
            if (object.yPos != null)
                message.yPos = Number(object.yPos);
            if (object.zPos != null)
                message.zPos = Number(object.zPos);
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            if (object.armor != null)
                message.armor = String(object.armor);
            if (object.movement != null)
                message.movement = String(object.movement);
            return message;
        };
    
        /**
         * Creates a plain object from a LoginSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginSuccess
         * @static
         * @param {LoginSuccess} message LoginSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.xPos = 0;
                object.yPos = 0;
                object.zPos = 0;
                object.itemsDef = "";
                object.blocksDef = "";
                object.inventory = "";
                object.armor = "";
                object.movement = "";
            }
            if (message.xPos != null && message.hasOwnProperty("xPos"))
                object.xPos = options.json && !isFinite(message.xPos) ? String(message.xPos) : message.xPos;
            if (message.yPos != null && message.hasOwnProperty("yPos"))
                object.yPos = options.json && !isFinite(message.yPos) ? String(message.yPos) : message.yPos;
            if (message.zPos != null && message.hasOwnProperty("zPos"))
                object.zPos = options.json && !isFinite(message.zPos) ? String(message.zPos) : message.zPos;
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                object.itemsDef = message.itemsDef;
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                object.blocksDef = message.blocksDef;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            if (message.armor != null && message.hasOwnProperty("armor"))
                object.armor = message.armor;
            if (message.movement != null && message.hasOwnProperty("movement"))
                object.movement = message.movement;
            return object;
        };
    
        /**
         * Converts this LoginSuccess to JSON.
         * @function toJSON
         * @memberof LoginSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LoginSuccess;
    })();
    
    $root.Ping = (function() {
    
        /**
         * Properties of a Ping.
         * @exports IPing
         * @interface IPing
         * @property {number|Long|null} [time] Ping time
         */
    
        /**
         * Constructs a new Ping.
         * @exports Ping
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Ping time.
         * @member {number|Long} time
         * @memberof Ping
         * @instance
         */
        Ping.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof Ping
         * @static
         * @param {IPing=} [properties] Properties to set
         * @returns {Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };
    
        /**
         * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
         * @function encode
         * @memberof Ping
         * @static
         * @param {IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ping
         * @static
         * @param {IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Ping message.
         * @function verify
         * @memberof Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.Ping)
                return object;
            var message = new $root.Ping();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ping
         * @static
         * @param {Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Ping;
    })();
    
    $root.PlayerKick = (function() {
    
        /**
         * Properties of a PlayerKick.
         * @exports IPlayerKick
         * @interface IPlayerKick
         * @property {string|null} [reason] PlayerKick reason
         * @property {number|Long|null} [time] PlayerKick time
         */
    
        /**
         * Constructs a new PlayerKick.
         * @exports PlayerKick
         * @classdesc Represents a PlayerKick.
         * @implements IPlayerKick
         * @constructor
         * @param {IPlayerKick=} [properties] Properties to set
         */
        function PlayerKick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerKick reason.
         * @member {string} reason
         * @memberof PlayerKick
         * @instance
         */
        PlayerKick.prototype.reason = "";
    
        /**
         * PlayerKick time.
         * @member {number|Long} time
         * @memberof PlayerKick
         * @instance
         */
        PlayerKick.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new PlayerKick instance using the specified properties.
         * @function create
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick=} [properties] Properties to set
         * @returns {PlayerKick} PlayerKick instance
         */
        PlayerKick.create = function create(properties) {
            return new PlayerKick(properties);
        };
    
        /**
         * Encodes the specified PlayerKick message. Does not implicitly {@link PlayerKick.verify|verify} messages.
         * @function encode
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick} message PlayerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerKick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerKick message, length delimited. Does not implicitly {@link PlayerKick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerKick
         * @static
         * @param {IPlayerKick} message PlayerKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerKick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerKick message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerKick} PlayerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerKick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerKick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
                    break;
                case 2:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerKick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerKick} PlayerKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerKick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerKick message.
         * @function verify
         * @memberof PlayerKick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerKick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a PlayerKick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerKick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerKick} PlayerKick
         */
        PlayerKick.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerKick)
                return object;
            var message = new $root.PlayerKick();
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerKick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerKick
         * @static
         * @param {PlayerKick} message PlayerKick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerKick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reason = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this PlayerKick to JSON.
         * @function toJSON
         * @memberof PlayerKick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerKick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerKick;
    })();
    
    $root.PlayerEntity = (function() {
    
        /**
         * Properties of a PlayerEntity.
         * @exports IPlayerEntity
         * @interface IPlayerEntity
         * @property {string|null} [uuid] PlayerEntity uuid
         * @property {string|null} [model] PlayerEntity model
         * @property {string|null} [texture] PlayerEntity texture
         */
    
        /**
         * Constructs a new PlayerEntity.
         * @exports PlayerEntity
         * @classdesc Represents a PlayerEntity.
         * @implements IPlayerEntity
         * @constructor
         * @param {IPlayerEntity=} [properties] Properties to set
         */
        function PlayerEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerEntity uuid.
         * @member {string} uuid
         * @memberof PlayerEntity
         * @instance
         */
        PlayerEntity.prototype.uuid = "";
    
        /**
         * PlayerEntity model.
         * @member {string} model
         * @memberof PlayerEntity
         * @instance
         */
        PlayerEntity.prototype.model = "";
    
        /**
         * PlayerEntity texture.
         * @member {string} texture
         * @memberof PlayerEntity
         * @instance
         */
        PlayerEntity.prototype.texture = "";
    
        /**
         * Creates a new PlayerEntity instance using the specified properties.
         * @function create
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity=} [properties] Properties to set
         * @returns {PlayerEntity} PlayerEntity instance
         */
        PlayerEntity.create = function create(properties) {
            return new PlayerEntity(properties);
        };
    
        /**
         * Encodes the specified PlayerEntity message. Does not implicitly {@link PlayerEntity.verify|verify} messages.
         * @function encode
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity} message PlayerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            if (message.texture != null && Object.hasOwnProperty.call(message, "texture"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.texture);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerEntity message, length delimited. Does not implicitly {@link PlayerEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerEntity
         * @static
         * @param {IPlayerEntity} message PlayerEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerEntity message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerEntity} PlayerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.model = reader.string();
                    break;
                case 3:
                    message.texture = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerEntity} PlayerEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerEntity message.
         * @function verify
         * @memberof PlayerEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.texture != null && message.hasOwnProperty("texture"))
                if (!$util.isString(message.texture))
                    return "texture: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerEntity} PlayerEntity
         */
        PlayerEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerEntity)
                return object;
            var message = new $root.PlayerEntity();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.model != null)
                message.model = String(object.model);
            if (object.texture != null)
                message.texture = String(object.texture);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerEntity
         * @static
         * @param {PlayerEntity} message PlayerEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.model = "";
                object.texture = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.texture != null && message.hasOwnProperty("texture"))
                object.texture = message.texture;
            return object;
        };
    
        /**
         * Converts this PlayerEntity to JSON.
         * @function toJSON
         * @memberof PlayerEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerEntity;
    })();
    
    $root.PlayerTeleport = (function() {
    
        /**
         * Properties of a PlayerTeleport.
         * @exports IPlayerTeleport
         * @interface IPlayerTeleport
         * @property {number|null} [x] PlayerTeleport x
         * @property {number|null} [y] PlayerTeleport y
         * @property {number|null} [z] PlayerTeleport z
         */
    
        /**
         * Constructs a new PlayerTeleport.
         * @exports PlayerTeleport
         * @classdesc Represents a PlayerTeleport.
         * @implements IPlayerTeleport
         * @constructor
         * @param {IPlayerTeleport=} [properties] Properties to set
         */
        function PlayerTeleport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerTeleport x.
         * @member {number} x
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.x = 0;
    
        /**
         * PlayerTeleport y.
         * @member {number} y
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.y = 0;
    
        /**
         * PlayerTeleport z.
         * @member {number} z
         * @memberof PlayerTeleport
         * @instance
         */
        PlayerTeleport.prototype.z = 0;
    
        /**
         * Creates a new PlayerTeleport instance using the specified properties.
         * @function create
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport=} [properties] Properties to set
         * @returns {PlayerTeleport} PlayerTeleport instance
         */
        PlayerTeleport.create = function create(properties) {
            return new PlayerTeleport(properties);
        };
    
        /**
         * Encodes the specified PlayerTeleport message. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
         * @function encode
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport} message PlayerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTeleport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerTeleport message, length delimited. Does not implicitly {@link PlayerTeleport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerTeleport
         * @static
         * @param {IPlayerTeleport} message PlayerTeleport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerTeleport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerTeleport message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerTeleport} PlayerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTeleport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerTeleport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                case 3:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerTeleport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerTeleport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerTeleport} PlayerTeleport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerTeleport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerTeleport message.
         * @function verify
         * @memberof PlayerTeleport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerTeleport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerTeleport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerTeleport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerTeleport} PlayerTeleport
         */
        PlayerTeleport.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerTeleport)
                return object;
            var message = new $root.PlayerTeleport();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerTeleport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerTeleport
         * @static
         * @param {PlayerTeleport} message PlayerTeleport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerTeleport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this PlayerTeleport to JSON.
         * @function toJSON
         * @memberof PlayerTeleport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerTeleport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerTeleport;
    })();
    
    $root.PlayerInventory = (function() {
    
        /**
         * Properties of a PlayerInventory.
         * @exports IPlayerInventory
         * @interface IPlayerInventory
         * @property {string|null} [type] PlayerInventory type
         * @property {string|null} [inventory] PlayerInventory inventory
         */
    
        /**
         * Constructs a new PlayerInventory.
         * @exports PlayerInventory
         * @classdesc Represents a PlayerInventory.
         * @implements IPlayerInventory
         * @constructor
         * @param {IPlayerInventory=} [properties] Properties to set
         */
        function PlayerInventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerInventory type.
         * @member {string} type
         * @memberof PlayerInventory
         * @instance
         */
        PlayerInventory.prototype.type = "";
    
        /**
         * PlayerInventory inventory.
         * @member {string} inventory
         * @memberof PlayerInventory
         * @instance
         */
        PlayerInventory.prototype.inventory = "";
    
        /**
         * Creates a new PlayerInventory instance using the specified properties.
         * @function create
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory=} [properties] Properties to set
         * @returns {PlayerInventory} PlayerInventory instance
         */
        PlayerInventory.create = function create(properties) {
            return new PlayerInventory(properties);
        };
    
        /**
         * Encodes the specified PlayerInventory message. Does not implicitly {@link PlayerInventory.verify|verify} messages.
         * @function encode
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory} message PlayerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.inventory != null && Object.hasOwnProperty.call(message, "inventory"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inventory);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerInventory message, length delimited. Does not implicitly {@link PlayerInventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerInventory
         * @static
         * @param {IPlayerInventory} message PlayerInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerInventory message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerInventory} PlayerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerInventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.inventory = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerInventory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerInventory} PlayerInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerInventory message.
         * @function verify
         * @memberof PlayerInventory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                if (!$util.isString(message.inventory))
                    return "inventory: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerInventory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerInventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerInventory} PlayerInventory
         */
        PlayerInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerInventory)
                return object;
            var message = new $root.PlayerInventory();
            if (object.type != null)
                message.type = String(object.type);
            if (object.inventory != null)
                message.inventory = String(object.inventory);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerInventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerInventory
         * @static
         * @param {PlayerInventory} message PlayerInventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.inventory = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.inventory != null && message.hasOwnProperty("inventory"))
                object.inventory = message.inventory;
            return object;
        };
    
        /**
         * Converts this PlayerInventory to JSON.
         * @function toJSON
         * @memberof PlayerInventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerInventory;
    })();
    
    $root.PlayerSlotUpdate = (function() {
    
        /**
         * Properties of a PlayerSlotUpdate.
         * @exports IPlayerSlotUpdate
         * @interface IPlayerSlotUpdate
         * @property {number|null} [slot] PlayerSlotUpdate slot
         * @property {string|null} [type] PlayerSlotUpdate type
         * @property {string|null} [data] PlayerSlotUpdate data
         */
    
        /**
         * Constructs a new PlayerSlotUpdate.
         * @exports PlayerSlotUpdate
         * @classdesc Represents a PlayerSlotUpdate.
         * @implements IPlayerSlotUpdate
         * @constructor
         * @param {IPlayerSlotUpdate=} [properties] Properties to set
         */
        function PlayerSlotUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerSlotUpdate slot.
         * @member {number} slot
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.slot = 0;
    
        /**
         * PlayerSlotUpdate type.
         * @member {string} type
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.type = "";
    
        /**
         * PlayerSlotUpdate data.
         * @member {string} data
         * @memberof PlayerSlotUpdate
         * @instance
         */
        PlayerSlotUpdate.prototype.data = "";
    
        /**
         * Creates a new PlayerSlotUpdate instance using the specified properties.
         * @function create
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate=} [properties] Properties to set
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate instance
         */
        PlayerSlotUpdate.create = function create(properties) {
            return new PlayerSlotUpdate(properties);
        };
    
        /**
         * Encodes the specified PlayerSlotUpdate message. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
         * @function encode
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate} message PlayerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSlotUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slot);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerSlotUpdate message, length delimited. Does not implicitly {@link PlayerSlotUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerSlotUpdate
         * @static
         * @param {IPlayerSlotUpdate} message PlayerSlotUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSlotUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerSlotUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSlotUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerSlotUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.slot = reader.uint32();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerSlotUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerSlotUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSlotUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerSlotUpdate message.
         * @function verify
         * @memberof PlayerSlotUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSlotUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot))
                    return "slot: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerSlotUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerSlotUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerSlotUpdate} PlayerSlotUpdate
         */
        PlayerSlotUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerSlotUpdate)
                return object;
            var message = new $root.PlayerSlotUpdate();
            if (object.slot != null)
                message.slot = object.slot >>> 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerSlotUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerSlotUpdate
         * @static
         * @param {PlayerSlotUpdate} message PlayerSlotUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSlotUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.slot = 0;
                object.type = "";
                object.data = "";
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                object.slot = message.slot;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };
    
        /**
         * Converts this PlayerSlotUpdate to JSON.
         * @function toJSON
         * @memberof PlayerSlotUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSlotUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerSlotUpdate;
    })();
    
    $root.PlayerApplyImpulse = (function() {
    
        /**
         * Properties of a PlayerApplyImpulse.
         * @exports IPlayerApplyImpulse
         * @interface IPlayerApplyImpulse
         * @property {number|null} [x] PlayerApplyImpulse x
         * @property {number|null} [y] PlayerApplyImpulse y
         * @property {number|null} [z] PlayerApplyImpulse z
         */
    
        /**
         * Constructs a new PlayerApplyImpulse.
         * @exports PlayerApplyImpulse
         * @classdesc Represents a PlayerApplyImpulse.
         * @implements IPlayerApplyImpulse
         * @constructor
         * @param {IPlayerApplyImpulse=} [properties] Properties to set
         */
        function PlayerApplyImpulse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerApplyImpulse x.
         * @member {number} x
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.x = 0;
    
        /**
         * PlayerApplyImpulse y.
         * @member {number} y
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.y = 0;
    
        /**
         * PlayerApplyImpulse z.
         * @member {number} z
         * @memberof PlayerApplyImpulse
         * @instance
         */
        PlayerApplyImpulse.prototype.z = 0;
    
        /**
         * Creates a new PlayerApplyImpulse instance using the specified properties.
         * @function create
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse=} [properties] Properties to set
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse instance
         */
        PlayerApplyImpulse.create = function create(properties) {
            return new PlayerApplyImpulse(properties);
        };
    
        /**
         * Encodes the specified PlayerApplyImpulse message. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
         * @function encode
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse} message PlayerApplyImpulse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerApplyImpulse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerApplyImpulse message, length delimited. Does not implicitly {@link PlayerApplyImpulse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerApplyImpulse
         * @static
         * @param {IPlayerApplyImpulse} message PlayerApplyImpulse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerApplyImpulse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerApplyImpulse message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerApplyImpulse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerApplyImpulse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerApplyImpulse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.float();
                    break;
                case 2:
                    message.y = reader.float();
                    break;
                case 3:
                    message.z = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerApplyImpulse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerApplyImpulse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerApplyImpulse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerApplyImpulse message.
         * @function verify
         * @memberof PlayerApplyImpulse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerApplyImpulse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerApplyImpulse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerApplyImpulse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerApplyImpulse} PlayerApplyImpulse
         */
        PlayerApplyImpulse.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerApplyImpulse)
                return object;
            var message = new $root.PlayerApplyImpulse();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerApplyImpulse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerApplyImpulse
         * @static
         * @param {PlayerApplyImpulse} message PlayerApplyImpulse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerApplyImpulse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this PlayerApplyImpulse to JSON.
         * @function toJSON
         * @memberof PlayerApplyImpulse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerApplyImpulse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerApplyImpulse;
    })();
    
    $root.PlayerUpdateMovement = (function() {
    
        /**
         * Properties of a PlayerUpdateMovement.
         * @exports IPlayerUpdateMovement
         * @interface IPlayerUpdateMovement
         * @property {string|null} [key] PlayerUpdateMovement key
         * @property {number|null} [value] PlayerUpdateMovement value
         */
    
        /**
         * Constructs a new PlayerUpdateMovement.
         * @exports PlayerUpdateMovement
         * @classdesc Represents a PlayerUpdateMovement.
         * @implements IPlayerUpdateMovement
         * @constructor
         * @param {IPlayerUpdateMovement=} [properties] Properties to set
         */
        function PlayerUpdateMovement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerUpdateMovement key.
         * @member {string} key
         * @memberof PlayerUpdateMovement
         * @instance
         */
        PlayerUpdateMovement.prototype.key = "";
    
        /**
         * PlayerUpdateMovement value.
         * @member {number} value
         * @memberof PlayerUpdateMovement
         * @instance
         */
        PlayerUpdateMovement.prototype.value = 0;
    
        /**
         * Creates a new PlayerUpdateMovement instance using the specified properties.
         * @function create
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement=} [properties] Properties to set
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement instance
         */
        PlayerUpdateMovement.create = function create(properties) {
            return new PlayerUpdateMovement(properties);
        };
    
        /**
         * Encodes the specified PlayerUpdateMovement message. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
         * @function encode
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement} message PlayerUpdateMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdateMovement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerUpdateMovement message, length delimited. Does not implicitly {@link PlayerUpdateMovement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerUpdateMovement
         * @static
         * @param {IPlayerUpdateMovement} message PlayerUpdateMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdateMovement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerUpdateMovement message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerUpdateMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdateMovement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerUpdateMovement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerUpdateMovement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerUpdateMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdateMovement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerUpdateMovement message.
         * @function verify
         * @memberof PlayerUpdateMovement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerUpdateMovement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerUpdateMovement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerUpdateMovement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerUpdateMovement} PlayerUpdateMovement
         */
        PlayerUpdateMovement.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerUpdateMovement)
                return object;
            var message = new $root.PlayerUpdateMovement();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerUpdateMovement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerUpdateMovement
         * @static
         * @param {PlayerUpdateMovement} message PlayerUpdateMovement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerUpdateMovement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PlayerUpdateMovement to JSON.
         * @function toJSON
         * @memberof PlayerUpdateMovement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerUpdateMovement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerUpdateMovement;
    })();
    
    $root.PlayerUpdatePhysics = (function() {
    
        /**
         * Properties of a PlayerUpdatePhysics.
         * @exports IPlayerUpdatePhysics
         * @interface IPlayerUpdatePhysics
         * @property {string|null} [key] PlayerUpdatePhysics key
         * @property {number|null} [value] PlayerUpdatePhysics value
         */
    
        /**
         * Constructs a new PlayerUpdatePhysics.
         * @exports PlayerUpdatePhysics
         * @classdesc Represents a PlayerUpdatePhysics.
         * @implements IPlayerUpdatePhysics
         * @constructor
         * @param {IPlayerUpdatePhysics=} [properties] Properties to set
         */
        function PlayerUpdatePhysics(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerUpdatePhysics key.
         * @member {string} key
         * @memberof PlayerUpdatePhysics
         * @instance
         */
        PlayerUpdatePhysics.prototype.key = "";
    
        /**
         * PlayerUpdatePhysics value.
         * @member {number} value
         * @memberof PlayerUpdatePhysics
         * @instance
         */
        PlayerUpdatePhysics.prototype.value = 0;
    
        /**
         * Creates a new PlayerUpdatePhysics instance using the specified properties.
         * @function create
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics=} [properties] Properties to set
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics instance
         */
        PlayerUpdatePhysics.create = function create(properties) {
            return new PlayerUpdatePhysics(properties);
        };
    
        /**
         * Encodes the specified PlayerUpdatePhysics message. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
         * @function encode
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics} message PlayerUpdatePhysics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdatePhysics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerUpdatePhysics message, length delimited. Does not implicitly {@link PlayerUpdatePhysics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {IPlayerUpdatePhysics} message PlayerUpdatePhysics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerUpdatePhysics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerUpdatePhysics message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdatePhysics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerUpdatePhysics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerUpdatePhysics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerUpdatePhysics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerUpdatePhysics message.
         * @function verify
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerUpdatePhysics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerUpdatePhysics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerUpdatePhysics} PlayerUpdatePhysics
         */
        PlayerUpdatePhysics.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerUpdatePhysics)
                return object;
            var message = new $root.PlayerUpdatePhysics();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerUpdatePhysics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerUpdatePhysics
         * @static
         * @param {PlayerUpdatePhysics} message PlayerUpdatePhysics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerUpdatePhysics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PlayerUpdatePhysics to JSON.
         * @function toJSON
         * @memberof PlayerUpdatePhysics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerUpdatePhysics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerUpdatePhysics;
    })();
    
    $root.PlayerHealth = (function() {
    
        /**
         * Properties of a PlayerHealth.
         * @exports IPlayerHealth
         * @interface IPlayerHealth
         * @property {number|null} [value] PlayerHealth value
         * @property {number|null} [max] PlayerHealth max
         */
    
        /**
         * Constructs a new PlayerHealth.
         * @exports PlayerHealth
         * @classdesc Represents a PlayerHealth.
         * @implements IPlayerHealth
         * @constructor
         * @param {IPlayerHealth=} [properties] Properties to set
         */
        function PlayerHealth(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerHealth value.
         * @member {number} value
         * @memberof PlayerHealth
         * @instance
         */
        PlayerHealth.prototype.value = 0;
    
        /**
         * PlayerHealth max.
         * @member {number} max
         * @memberof PlayerHealth
         * @instance
         */
        PlayerHealth.prototype.max = 0;
    
        /**
         * Creates a new PlayerHealth instance using the specified properties.
         * @function create
         * @memberof PlayerHealth
         * @static
         * @param {IPlayerHealth=} [properties] Properties to set
         * @returns {PlayerHealth} PlayerHealth instance
         */
        PlayerHealth.create = function create(properties) {
            return new PlayerHealth(properties);
        };
    
        /**
         * Encodes the specified PlayerHealth message. Does not implicitly {@link PlayerHealth.verify|verify} messages.
         * @function encode
         * @memberof PlayerHealth
         * @static
         * @param {IPlayerHealth} message PlayerHealth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerHealth.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.value);
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.max);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerHealth message, length delimited. Does not implicitly {@link PlayerHealth.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerHealth
         * @static
         * @param {IPlayerHealth} message PlayerHealth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerHealth.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerHealth message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerHealth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerHealth} PlayerHealth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerHealth.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerHealth();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.sint32();
                    break;
                case 2:
                    message.max = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerHealth message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerHealth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerHealth} PlayerHealth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerHealth.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerHealth message.
         * @function verify
         * @memberof PlayerHealth
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerHealth.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (!$util.isInteger(message.max))
                    return "max: integer expected";
            return null;
        };
    
        /**
         * Creates a PlayerHealth message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerHealth
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerHealth} PlayerHealth
         */
        PlayerHealth.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerHealth)
                return object;
            var message = new $root.PlayerHealth();
            if (object.value != null)
                message.value = object.value | 0;
            if (object.max != null)
                message.max = object.max | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerHealth message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerHealth
         * @static
         * @param {PlayerHealth} message PlayerHealth
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerHealth.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.value = 0;
                object.max = 0;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = message.max;
            return object;
        };
    
        /**
         * Converts this PlayerHealth to JSON.
         * @function toJSON
         * @memberof PlayerHealth
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerHealth.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerHealth;
    })();
    
    $root.PlayerSetBlockReach = (function() {
    
        /**
         * Properties of a PlayerSetBlockReach.
         * @exports IPlayerSetBlockReach
         * @interface IPlayerSetBlockReach
         * @property {number|null} [value] PlayerSetBlockReach value
         */
    
        /**
         * Constructs a new PlayerSetBlockReach.
         * @exports PlayerSetBlockReach
         * @classdesc Represents a PlayerSetBlockReach.
         * @implements IPlayerSetBlockReach
         * @constructor
         * @param {IPlayerSetBlockReach=} [properties] Properties to set
         */
        function PlayerSetBlockReach(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerSetBlockReach value.
         * @member {number} value
         * @memberof PlayerSetBlockReach
         * @instance
         */
        PlayerSetBlockReach.prototype.value = 0;
    
        /**
         * Creates a new PlayerSetBlockReach instance using the specified properties.
         * @function create
         * @memberof PlayerSetBlockReach
         * @static
         * @param {IPlayerSetBlockReach=} [properties] Properties to set
         * @returns {PlayerSetBlockReach} PlayerSetBlockReach instance
         */
        PlayerSetBlockReach.create = function create(properties) {
            return new PlayerSetBlockReach(properties);
        };
    
        /**
         * Encodes the specified PlayerSetBlockReach message. Does not implicitly {@link PlayerSetBlockReach.verify|verify} messages.
         * @function encode
         * @memberof PlayerSetBlockReach
         * @static
         * @param {IPlayerSetBlockReach} message PlayerSetBlockReach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetBlockReach.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerSetBlockReach message, length delimited. Does not implicitly {@link PlayerSetBlockReach.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerSetBlockReach
         * @static
         * @param {IPlayerSetBlockReach} message PlayerSetBlockReach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetBlockReach.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerSetBlockReach message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerSetBlockReach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerSetBlockReach} PlayerSetBlockReach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetBlockReach.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerSetBlockReach();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerSetBlockReach message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerSetBlockReach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerSetBlockReach} PlayerSetBlockReach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetBlockReach.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerSetBlockReach message.
         * @function verify
         * @memberof PlayerSetBlockReach
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSetBlockReach.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
    
        /**
         * Creates a PlayerSetBlockReach message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerSetBlockReach
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerSetBlockReach} PlayerSetBlockReach
         */
        PlayerSetBlockReach.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerSetBlockReach)
                return object;
            var message = new $root.PlayerSetBlockReach();
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerSetBlockReach message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerSetBlockReach
         * @static
         * @param {PlayerSetBlockReach} message PlayerSetBlockReach
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSetBlockReach.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PlayerSetBlockReach to JSON.
         * @function toJSON
         * @memberof PlayerSetBlockReach
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSetBlockReach.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PlayerSetBlockReach;
    })();
    
    $root.PlayerOpenInventory = (function() {
    
        /**
         * Properties of a PlayerOpenInventory.
         * @exports IPlayerOpenInventory
         * @interface IPlayerOpenInventory
         * @property {PlayerOpenInventory.Type|null} [type] PlayerOpenInventory type
         * @property {string|null} [name] PlayerOpenInventory name
         * @property {string|null} [data] PlayerOpenInventory data
         */
    
        /**
         * Constructs a new PlayerOpenInventory.
         * @exports PlayerOpenInventory
         * @classdesc Represents a PlayerOpenInventory.
         * @implements IPlayerOpenInventory
         * @constructor
         * @param {IPlayerOpenInventory=} [properties] Properties to set
         */
        function PlayerOpenInventory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PlayerOpenInventory type.
         * @member {PlayerOpenInventory.Type} type
         * @memberof PlayerOpenInventory
         * @instance
         */
        PlayerOpenInventory.prototype.type = 0;
    
        /**
         * PlayerOpenInventory name.
         * @member {string} name
         * @memberof PlayerOpenInventory
         * @instance
         */
        PlayerOpenInventory.prototype.name = "";
    
        /**
         * PlayerOpenInventory data.
         * @member {string} data
         * @memberof PlayerOpenInventory
         * @instance
         */
        PlayerOpenInventory.prototype.data = "";
    
        /**
         * Creates a new PlayerOpenInventory instance using the specified properties.
         * @function create
         * @memberof PlayerOpenInventory
         * @static
         * @param {IPlayerOpenInventory=} [properties] Properties to set
         * @returns {PlayerOpenInventory} PlayerOpenInventory instance
         */
        PlayerOpenInventory.create = function create(properties) {
            return new PlayerOpenInventory(properties);
        };
    
        /**
         * Encodes the specified PlayerOpenInventory message. Does not implicitly {@link PlayerOpenInventory.verify|verify} messages.
         * @function encode
         * @memberof PlayerOpenInventory
         * @static
         * @param {IPlayerOpenInventory} message PlayerOpenInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOpenInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified PlayerOpenInventory message, length delimited. Does not implicitly {@link PlayerOpenInventory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlayerOpenInventory
         * @static
         * @param {IPlayerOpenInventory} message PlayerOpenInventory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOpenInventory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PlayerOpenInventory message from the specified reader or buffer.
         * @function decode
         * @memberof PlayerOpenInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlayerOpenInventory} PlayerOpenInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOpenInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerOpenInventory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PlayerOpenInventory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlayerOpenInventory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlayerOpenInventory} PlayerOpenInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOpenInventory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PlayerOpenInventory message.
         * @function verify
         * @memberof PlayerOpenInventory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerOpenInventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };
    
        /**
         * Creates a PlayerOpenInventory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlayerOpenInventory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlayerOpenInventory} PlayerOpenInventory
         */
        PlayerOpenInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.PlayerOpenInventory)
                return object;
            var message = new $root.PlayerOpenInventory();
            switch (object.type) {
            case "MAIN":
            case 0:
                message.type = 0;
                break;
            case "CHEST":
            case 1:
                message.type = 1;
                break;
            case "CRAFTING":
            case 2:
                message.type = 2;
                break;
            case "FURNACE":
            case 3:
                message.type = 3;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from a PlayerOpenInventory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlayerOpenInventory
         * @static
         * @param {PlayerOpenInventory} message PlayerOpenInventory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerOpenInventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "MAIN" : 0;
                object.name = "";
                object.data = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.PlayerOpenInventory.Type[message.type] : message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };
    
        /**
         * Converts this PlayerOpenInventory to JSON.
         * @function toJSON
         * @memberof PlayerOpenInventory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerOpenInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Type enum.
         * @name PlayerOpenInventory.Type
         * @enum {number}
         * @property {number} MAIN=0 MAIN value
         * @property {number} CHEST=1 CHEST value
         * @property {number} CRAFTING=2 CRAFTING value
         * @property {number} FURNACE=3 FURNACE value
         */
        PlayerOpenInventory.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MAIN"] = 0;
            values[valuesById[1] = "CHEST"] = 1;
            values[valuesById[2] = "CRAFTING"] = 2;
            values[valuesById[3] = "FURNACE"] = 3;
            return values;
        })();
    
        return PlayerOpenInventory;
    })();
    
    $root.SoundPlay = (function() {
    
        /**
         * Properties of a SoundPlay.
         * @exports ISoundPlay
         * @interface ISoundPlay
         * @property {string|null} [sound] SoundPlay sound
         * @property {number|null} [volume] SoundPlay volume
         * @property {number|null} [x] SoundPlay x
         * @property {number|null} [y] SoundPlay y
         * @property {number|null} [z] SoundPlay z
         */
    
        /**
         * Constructs a new SoundPlay.
         * @exports SoundPlay
         * @classdesc Represents a SoundPlay.
         * @implements ISoundPlay
         * @constructor
         * @param {ISoundPlay=} [properties] Properties to set
         */
        function SoundPlay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SoundPlay sound.
         * @member {string} sound
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.sound = "";
    
        /**
         * SoundPlay volume.
         * @member {number} volume
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.volume = 0;
    
        /**
         * SoundPlay x.
         * @member {number} x
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.x = 0;
    
        /**
         * SoundPlay y.
         * @member {number} y
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.y = 0;
    
        /**
         * SoundPlay z.
         * @member {number} z
         * @memberof SoundPlay
         * @instance
         */
        SoundPlay.prototype.z = 0;
    
        /**
         * Creates a new SoundPlay instance using the specified properties.
         * @function create
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay=} [properties] Properties to set
         * @returns {SoundPlay} SoundPlay instance
         */
        SoundPlay.create = function create(properties) {
            return new SoundPlay(properties);
        };
    
        /**
         * Encodes the specified SoundPlay message. Does not implicitly {@link SoundPlay.verify|verify} messages.
         * @function encode
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay} message SoundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SoundPlay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sound != null && Object.hasOwnProperty.call(message, "sound"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sound);
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.volume);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified SoundPlay message, length delimited. Does not implicitly {@link SoundPlay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SoundPlay
         * @static
         * @param {ISoundPlay} message SoundPlay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SoundPlay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SoundPlay message from the specified reader or buffer.
         * @function decode
         * @memberof SoundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SoundPlay} SoundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SoundPlay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SoundPlay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sound = reader.string();
                    break;
                case 2:
                    message.volume = reader.uint32();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SoundPlay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SoundPlay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SoundPlay} SoundPlay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SoundPlay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SoundPlay message.
         * @function verify
         * @memberof SoundPlay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SoundPlay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sound != null && message.hasOwnProperty("sound"))
                if (!$util.isString(message.sound))
                    return "sound: string expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isInteger(message.volume))
                    return "volume: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a SoundPlay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SoundPlay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SoundPlay} SoundPlay
         */
        SoundPlay.fromObject = function fromObject(object) {
            if (object instanceof $root.SoundPlay)
                return object;
            var message = new $root.SoundPlay();
            if (object.sound != null)
                message.sound = String(object.sound);
            if (object.volume != null)
                message.volume = object.volume >>> 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a SoundPlay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SoundPlay
         * @static
         * @param {SoundPlay} message SoundPlay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SoundPlay.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sound = "";
                object.volume = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.sound != null && message.hasOwnProperty("sound"))
                object.sound = message.sound;
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = message.volume;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this SoundPlay to JSON.
         * @function toJSON
         * @memberof SoundPlay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SoundPlay.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SoundPlay;
    })();
    
    $root.ChatMessage = (function() {
    
        /**
         * Properties of a ChatMessage.
         * @exports IChatMessage
         * @interface IChatMessage
         * @property {Object.<string,ChatMessage.IChatComponent>|null} [message] ChatMessage message
         * @property {number|Long|null} [time] ChatMessage time
         */
    
        /**
         * Constructs a new ChatMessage.
         * @exports ChatMessage
         * @classdesc Represents a ChatMessage.
         * @implements IChatMessage
         * @constructor
         * @param {IChatMessage=} [properties] Properties to set
         */
        function ChatMessage(properties) {
            this.message = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChatMessage message.
         * @member {Object.<string,ChatMessage.IChatComponent>} message
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.message = $util.emptyObject;
    
        /**
         * ChatMessage time.
         * @member {number|Long} time
         * @memberof ChatMessage
         * @instance
         */
        ChatMessage.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage=} [properties] Properties to set
         * @returns {ChatMessage} ChatMessage instance
         */
        ChatMessage.create = function create(properties) {
            return new ChatMessage(properties);
        };
    
        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                for (var keys = Object.keys(message.message), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.ChatMessage.ChatComponent.encode(message.message[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {IChatMessage} message ChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.message === $util.emptyObject)
                        message.message = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = $root.ChatMessage.ChatComponent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.message[key] = value;
                    break;
                case 2:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage} ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChatMessage message.
         * @function verify
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                if (!$util.isObject(message.message))
                    return "message: object expected";
                var key = Object.keys(message.message);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "message: integer key{k:uint32} expected";
                    {
                        var error = $root.ChatMessage.ChatComponent.verify(message.message[key[i]]);
                        if (error)
                            return "message." + error;
                    }
                }
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage} ChatMessage
         */
        ChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage)
                return object;
            var message = new $root.ChatMessage();
            if (object.message) {
                if (typeof object.message !== "object")
                    throw TypeError(".ChatMessage.message: object expected");
                message.message = {};
                for (var keys = Object.keys(object.message), i = 0; i < keys.length; ++i) {
                    if (typeof object.message[keys[i]] !== "object")
                        throw TypeError(".ChatMessage.message: object expected");
                    message.message[keys[i]] = $root.ChatMessage.ChatComponent.fromObject(object.message[keys[i]]);
                }
            }
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage
         * @static
         * @param {ChatMessage} message ChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.message = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            var keys2;
            if (message.message && (keys2 = Object.keys(message.message)).length) {
                object.message = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.message[keys2[j]] = $root.ChatMessage.ChatComponent.toObject(message.message[keys2[j]], options);
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this ChatMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ChatMessage.ChatComponent = (function() {
    
            /**
             * Properties of a ChatComponent.
             * @memberof ChatMessage
             * @interface IChatComponent
             * @property {string|null} [text] ChatComponent text
             * @property {string|null} [font] ChatComponent font
             * @property {string|null} [color] ChatComponent color
             * @property {boolean|null} [linethrough] ChatComponent linethrough
             * @property {boolean|null} [underline] ChatComponent underline
             */
    
            /**
             * Constructs a new ChatComponent.
             * @memberof ChatMessage
             * @classdesc Represents a ChatComponent.
             * @implements IChatComponent
             * @constructor
             * @param {ChatMessage.IChatComponent=} [properties] Properties to set
             */
            function ChatComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatComponent text.
             * @member {string} text
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.text = "";
    
            /**
             * ChatComponent font.
             * @member {string} font
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.font = "";
    
            /**
             * ChatComponent color.
             * @member {string} color
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.color = "";
    
            /**
             * ChatComponent linethrough.
             * @member {boolean} linethrough
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.linethrough = false;
    
            /**
             * ChatComponent underline.
             * @member {boolean} underline
             * @memberof ChatMessage.ChatComponent
             * @instance
             */
            ChatComponent.prototype.underline = false;
    
            /**
             * Creates a new ChatComponent instance using the specified properties.
             * @function create
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent=} [properties] Properties to set
             * @returns {ChatMessage.ChatComponent} ChatComponent instance
             */
            ChatComponent.create = function create(properties) {
                return new ChatComponent(properties);
            };
    
            /**
             * Encodes the specified ChatComponent message. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.font != null && Object.hasOwnProperty.call(message, "font"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.font);
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
                if (message.linethrough != null && Object.hasOwnProperty.call(message, "linethrough"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.linethrough);
                if (message.underline != null && Object.hasOwnProperty.call(message, "underline"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.underline);
                return writer;
            };
    
            /**
             * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link ChatMessage.ChatComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.ChatComponent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.font = reader.string();
                        break;
                    case 3:
                        message.color = reader.string();
                        break;
                    case 4:
                        message.linethrough = reader.bool();
                        break;
                    case 5:
                        message.underline = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatComponent message.
             * @function verify
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatComponent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.font != null && message.hasOwnProperty("font"))
                    if (!$util.isString(message.font))
                        return "font: string expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                    if (typeof message.linethrough !== "boolean")
                        return "linethrough: boolean expected";
                if (message.underline != null && message.hasOwnProperty("underline"))
                    if (typeof message.underline !== "boolean")
                        return "underline: boolean expected";
                return null;
            };
    
            /**
             * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.ChatComponent} ChatComponent
             */
            ChatComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.ChatComponent)
                    return object;
                var message = new $root.ChatMessage.ChatComponent();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.font != null)
                    message.font = String(object.font);
                if (object.color != null)
                    message.color = String(object.color);
                if (object.linethrough != null)
                    message.linethrough = Boolean(object.linethrough);
                if (object.underline != null)
                    message.underline = Boolean(object.underline);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.ChatComponent
             * @static
             * @param {ChatMessage.ChatComponent} message ChatComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatComponent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.font = "";
                    object.color = "";
                    object.linethrough = false;
                    object.underline = false;
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.font != null && message.hasOwnProperty("font"))
                    object.font = message.font;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                    object.linethrough = message.linethrough;
                if (message.underline != null && message.hasOwnProperty("underline"))
                    object.underline = message.underline;
                return object;
            };
    
            /**
             * Converts this ChatComponent to JSON.
             * @function toJSON
             * @memberof ChatMessage.ChatComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatComponent;
        })();
    
        return ChatMessage;
    })();
    
    $root.UpdateTextBoard = (function() {
    
        /**
         * Properties of an UpdateTextBoard.
         * @exports IUpdateTextBoard
         * @interface IUpdateTextBoard
         * @property {UpdateTextBoard.Type|null} [type] UpdateTextBoard type
         * @property {Object.<string,UpdateTextBoard.IChatComponent>|null} [message] UpdateTextBoard message
         * @property {number|Long|null} [time] UpdateTextBoard time
         */
    
        /**
         * Constructs a new UpdateTextBoard.
         * @exports UpdateTextBoard
         * @classdesc Represents an UpdateTextBoard.
         * @implements IUpdateTextBoard
         * @constructor
         * @param {IUpdateTextBoard=} [properties] Properties to set
         */
        function UpdateTextBoard(properties) {
            this.message = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UpdateTextBoard type.
         * @member {UpdateTextBoard.Type} type
         * @memberof UpdateTextBoard
         * @instance
         */
        UpdateTextBoard.prototype.type = 0;
    
        /**
         * UpdateTextBoard message.
         * @member {Object.<string,UpdateTextBoard.IChatComponent>} message
         * @memberof UpdateTextBoard
         * @instance
         */
        UpdateTextBoard.prototype.message = $util.emptyObject;
    
        /**
         * UpdateTextBoard time.
         * @member {number|Long} time
         * @memberof UpdateTextBoard
         * @instance
         */
        UpdateTextBoard.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new UpdateTextBoard instance using the specified properties.
         * @function create
         * @memberof UpdateTextBoard
         * @static
         * @param {IUpdateTextBoard=} [properties] Properties to set
         * @returns {UpdateTextBoard} UpdateTextBoard instance
         */
        UpdateTextBoard.create = function create(properties) {
            return new UpdateTextBoard(properties);
        };
    
        /**
         * Encodes the specified UpdateTextBoard message. Does not implicitly {@link UpdateTextBoard.verify|verify} messages.
         * @function encode
         * @memberof UpdateTextBoard
         * @static
         * @param {IUpdateTextBoard} message UpdateTextBoard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateTextBoard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                for (var keys = Object.keys(message.message), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.UpdateTextBoard.ChatComponent.encode(message.message[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.time);
            return writer;
        };
    
        /**
         * Encodes the specified UpdateTextBoard message, length delimited. Does not implicitly {@link UpdateTextBoard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UpdateTextBoard
         * @static
         * @param {IUpdateTextBoard} message UpdateTextBoard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateTextBoard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UpdateTextBoard message from the specified reader or buffer.
         * @function decode
         * @memberof UpdateTextBoard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UpdateTextBoard} UpdateTextBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateTextBoard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateTextBoard(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (message.message === $util.emptyObject)
                        message.message = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint32();
                            break;
                        case 2:
                            value = $root.UpdateTextBoard.ChatComponent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.message[key] = value;
                    break;
                case 3:
                    message.time = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an UpdateTextBoard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UpdateTextBoard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UpdateTextBoard} UpdateTextBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateTextBoard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UpdateTextBoard message.
         * @function verify
         * @memberof UpdateTextBoard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateTextBoard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message")) {
                if (!$util.isObject(message.message))
                    return "message: object expected";
                var key = Object.keys(message.message);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "message: integer key{k:uint32} expected";
                    {
                        var error = $root.UpdateTextBoard.ChatComponent.verify(message.message[key[i]]);
                        if (error)
                            return "message." + error;
                    }
                }
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };
    
        /**
         * Creates an UpdateTextBoard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UpdateTextBoard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UpdateTextBoard} UpdateTextBoard
         */
        UpdateTextBoard.fromObject = function fromObject(object) {
            if (object instanceof $root.UpdateTextBoard)
                return object;
            var message = new $root.UpdateTextBoard();
            switch (object.type) {
            case "TAB":
            case 0:
                message.type = 0;
                break;
            case "SIDE":
            case 1:
                message.type = 1;
                break;
            case "CENTER":
            case 2:
                message.type = 2;
                break;
            case "HOTBAR":
            case 3:
                message.type = 3;
                break;
            }
            if (object.message) {
                if (typeof object.message !== "object")
                    throw TypeError(".UpdateTextBoard.message: object expected");
                message.message = {};
                for (var keys = Object.keys(object.message), i = 0; i < keys.length; ++i) {
                    if (typeof object.message[keys[i]] !== "object")
                        throw TypeError(".UpdateTextBoard.message: object expected");
                    message.message[keys[i]] = $root.UpdateTextBoard.ChatComponent.fromObject(object.message[keys[i]]);
                }
            }
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from an UpdateTextBoard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UpdateTextBoard
         * @static
         * @param {UpdateTextBoard} message UpdateTextBoard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateTextBoard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.message = {};
            if (options.defaults) {
                object.type = options.enums === String ? "TAB" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.UpdateTextBoard.Type[message.type] : message.type;
            var keys2;
            if (message.message && (keys2 = Object.keys(message.message)).length) {
                object.message = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.message[keys2[j]] = $root.UpdateTextBoard.ChatComponent.toObject(message.message[keys2[j]], options);
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            return object;
        };
    
        /**
         * Converts this UpdateTextBoard to JSON.
         * @function toJSON
         * @memberof UpdateTextBoard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateTextBoard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Type enum.
         * @name UpdateTextBoard.Type
         * @enum {number}
         * @property {number} TAB=0 TAB value
         * @property {number} SIDE=1 SIDE value
         * @property {number} CENTER=2 CENTER value
         * @property {number} HOTBAR=3 HOTBAR value
         */
        UpdateTextBoard.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TAB"] = 0;
            values[valuesById[1] = "SIDE"] = 1;
            values[valuesById[2] = "CENTER"] = 2;
            values[valuesById[3] = "HOTBAR"] = 3;
            return values;
        })();
    
        UpdateTextBoard.ChatComponent = (function() {
    
            /**
             * Properties of a ChatComponent.
             * @memberof UpdateTextBoard
             * @interface IChatComponent
             * @property {string|null} [text] ChatComponent text
             * @property {string|null} [font] ChatComponent font
             * @property {string|null} [color] ChatComponent color
             * @property {boolean|null} [linethrough] ChatComponent linethrough
             * @property {boolean|null} [underline] ChatComponent underline
             */
    
            /**
             * Constructs a new ChatComponent.
             * @memberof UpdateTextBoard
             * @classdesc Represents a ChatComponent.
             * @implements IChatComponent
             * @constructor
             * @param {UpdateTextBoard.IChatComponent=} [properties] Properties to set
             */
            function ChatComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ChatComponent text.
             * @member {string} text
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             */
            ChatComponent.prototype.text = "";
    
            /**
             * ChatComponent font.
             * @member {string} font
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             */
            ChatComponent.prototype.font = "";
    
            /**
             * ChatComponent color.
             * @member {string} color
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             */
            ChatComponent.prototype.color = "";
    
            /**
             * ChatComponent linethrough.
             * @member {boolean} linethrough
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             */
            ChatComponent.prototype.linethrough = false;
    
            /**
             * ChatComponent underline.
             * @member {boolean} underline
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             */
            ChatComponent.prototype.underline = false;
    
            /**
             * Creates a new ChatComponent instance using the specified properties.
             * @function create
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {UpdateTextBoard.IChatComponent=} [properties] Properties to set
             * @returns {UpdateTextBoard.ChatComponent} ChatComponent instance
             */
            ChatComponent.create = function create(properties) {
                return new ChatComponent(properties);
            };
    
            /**
             * Encodes the specified ChatComponent message. Does not implicitly {@link UpdateTextBoard.ChatComponent.verify|verify} messages.
             * @function encode
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {UpdateTextBoard.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.font != null && Object.hasOwnProperty.call(message, "font"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.font);
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.color);
                if (message.linethrough != null && Object.hasOwnProperty.call(message, "linethrough"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.linethrough);
                if (message.underline != null && Object.hasOwnProperty.call(message, "underline"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.underline);
                return writer;
            };
    
            /**
             * Encodes the specified ChatComponent message, length delimited. Does not implicitly {@link UpdateTextBoard.ChatComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {UpdateTextBoard.IChatComponent} message ChatComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer.
             * @function decode
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UpdateTextBoard.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateTextBoard.ChatComponent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.font = reader.string();
                        break;
                    case 3:
                        message.color = reader.string();
                        break;
                    case 4:
                        message.linethrough = reader.bool();
                        break;
                    case 5:
                        message.underline = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ChatComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UpdateTextBoard.ChatComponent} ChatComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ChatComponent message.
             * @function verify
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatComponent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.font != null && message.hasOwnProperty("font"))
                    if (!$util.isString(message.font))
                        return "font: string expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                    if (typeof message.linethrough !== "boolean")
                        return "linethrough: boolean expected";
                if (message.underline != null && message.hasOwnProperty("underline"))
                    if (typeof message.underline !== "boolean")
                        return "underline: boolean expected";
                return null;
            };
    
            /**
             * Creates a ChatComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {UpdateTextBoard.ChatComponent} ChatComponent
             */
            ChatComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.UpdateTextBoard.ChatComponent)
                    return object;
                var message = new $root.UpdateTextBoard.ChatComponent();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.font != null)
                    message.font = String(object.font);
                if (object.color != null)
                    message.color = String(object.color);
                if (object.linethrough != null)
                    message.linethrough = Boolean(object.linethrough);
                if (object.underline != null)
                    message.underline = Boolean(object.underline);
                return message;
            };
    
            /**
             * Creates a plain object from a ChatComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof UpdateTextBoard.ChatComponent
             * @static
             * @param {UpdateTextBoard.ChatComponent} message ChatComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatComponent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.font = "";
                    object.color = "";
                    object.linethrough = false;
                    object.underline = false;
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.font != null && message.hasOwnProperty("font"))
                    object.font = message.font;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                if (message.linethrough != null && message.hasOwnProperty("linethrough"))
                    object.linethrough = message.linethrough;
                if (message.underline != null && message.hasOwnProperty("underline"))
                    object.underline = message.underline;
                return object;
            };
    
            /**
             * Converts this ChatComponent to JSON.
             * @function toJSON
             * @memberof UpdateTextBoard.ChatComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ChatComponent;
        })();
    
        return UpdateTextBoard;
    })();
    
    $root.EntityCreate = (function() {
    
        /**
         * Properties of an EntityCreate.
         * @exports IEntityCreate
         * @interface IEntityCreate
         * @property {string|null} [uuid] EntityCreate uuid
         * @property {string|null} [data] EntityCreate data
         */
    
        /**
         * Constructs a new EntityCreate.
         * @exports EntityCreate
         * @classdesc Represents an EntityCreate.
         * @implements IEntityCreate
         * @constructor
         * @param {IEntityCreate=} [properties] Properties to set
         */
        function EntityCreate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityCreate uuid.
         * @member {string} uuid
         * @memberof EntityCreate
         * @instance
         */
        EntityCreate.prototype.uuid = "";
    
        /**
         * EntityCreate data.
         * @member {string} data
         * @memberof EntityCreate
         * @instance
         */
        EntityCreate.prototype.data = "";
    
        /**
         * Creates a new EntityCreate instance using the specified properties.
         * @function create
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate=} [properties] Properties to set
         * @returns {EntityCreate} EntityCreate instance
         */
        EntityCreate.create = function create(properties) {
            return new EntityCreate(properties);
        };
    
        /**
         * Encodes the specified EntityCreate message. Does not implicitly {@link EntityCreate.verify|verify} messages.
         * @function encode
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate} message EntityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified EntityCreate message, length delimited. Does not implicitly {@link EntityCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityCreate
         * @static
         * @param {IEntityCreate} message EntityCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityCreate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityCreate} EntityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityCreate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityCreate} EntityCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityCreate message.
         * @function verify
         * @memberof EntityCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };
    
        /**
         * Creates an EntityCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityCreate} EntityCreate
         */
        EntityCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityCreate)
                return object;
            var message = new $root.EntityCreate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityCreate
         * @static
         * @param {EntityCreate} message EntityCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.data = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };
    
        /**
         * Converts this EntityCreate to JSON.
         * @function toJSON
         * @memberof EntityCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityCreate;
    })();
    
    $root.EntityRemove = (function() {
    
        /**
         * Properties of an EntityRemove.
         * @exports IEntityRemove
         * @interface IEntityRemove
         * @property {string|null} [uuid] EntityRemove uuid
         */
    
        /**
         * Constructs a new EntityRemove.
         * @exports EntityRemove
         * @classdesc Represents an EntityRemove.
         * @implements IEntityRemove
         * @constructor
         * @param {IEntityRemove=} [properties] Properties to set
         */
        function EntityRemove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityRemove uuid.
         * @member {string} uuid
         * @memberof EntityRemove
         * @instance
         */
        EntityRemove.prototype.uuid = "";
    
        /**
         * Creates a new EntityRemove instance using the specified properties.
         * @function create
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove=} [properties] Properties to set
         * @returns {EntityRemove} EntityRemove instance
         */
        EntityRemove.create = function create(properties) {
            return new EntityRemove(properties);
        };
    
        /**
         * Encodes the specified EntityRemove message. Does not implicitly {@link EntityRemove.verify|verify} messages.
         * @function encode
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove} message EntityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityRemove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };
    
        /**
         * Encodes the specified EntityRemove message, length delimited. Does not implicitly {@link EntityRemove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityRemove
         * @static
         * @param {IEntityRemove} message EntityRemove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityRemove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityRemove message from the specified reader or buffer.
         * @function decode
         * @memberof EntityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityRemove} EntityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityRemove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityRemove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityRemove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityRemove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityRemove} EntityRemove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityRemove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityRemove message.
         * @function verify
         * @memberof EntityRemove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityRemove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };
    
        /**
         * Creates an EntityRemove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityRemove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityRemove} EntityRemove
         */
        EntityRemove.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityRemove)
                return object;
            var message = new $root.EntityRemove();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityRemove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityRemove
         * @static
         * @param {EntityRemove} message EntityRemove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityRemove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uuid = "";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };
    
        /**
         * Converts this EntityRemove to JSON.
         * @function toJSON
         * @memberof EntityRemove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityRemove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityRemove;
    })();
    
    $root.EntityMove = (function() {
    
        /**
         * Properties of an EntityMove.
         * @exports IEntityMove
         * @interface IEntityMove
         * @property {string|null} [uuid] EntityMove uuid
         * @property {number|null} [x] EntityMove x
         * @property {number|null} [y] EntityMove y
         * @property {number|null} [z] EntityMove z
         * @property {number|null} [rotation] EntityMove rotation
         * @property {number|null} [pitch] EntityMove pitch
         */
    
        /**
         * Constructs a new EntityMove.
         * @exports EntityMove
         * @classdesc Represents an EntityMove.
         * @implements IEntityMove
         * @constructor
         * @param {IEntityMove=} [properties] Properties to set
         */
        function EntityMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityMove uuid.
         * @member {string} uuid
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.uuid = "";
    
        /**
         * EntityMove x.
         * @member {number} x
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.x = 0;
    
        /**
         * EntityMove y.
         * @member {number} y
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.y = 0;
    
        /**
         * EntityMove z.
         * @member {number} z
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.z = 0;
    
        /**
         * EntityMove rotation.
         * @member {number} rotation
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.rotation = 0;
    
        /**
         * EntityMove pitch.
         * @member {number} pitch
         * @memberof EntityMove
         * @instance
         */
        EntityMove.prototype.pitch = 0;
    
        /**
         * Creates a new EntityMove instance using the specified properties.
         * @function create
         * @memberof EntityMove
         * @static
         * @param {IEntityMove=} [properties] Properties to set
         * @returns {EntityMove} EntityMove instance
         */
        EntityMove.create = function create(properties) {
            return new EntityMove(properties);
        };
    
        /**
         * Encodes the specified EntityMove message. Does not implicitly {@link EntityMove.verify|verify} messages.
         * @function encode
         * @memberof EntityMove
         * @static
         * @param {IEntityMove} message EntityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.z);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.rotation);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.pitch);
            return writer;
        };
    
        /**
         * Encodes the specified EntityMove message, length delimited. Does not implicitly {@link EntityMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityMove
         * @static
         * @param {IEntityMove} message EntityMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityMove message from the specified reader or buffer.
         * @function decode
         * @memberof EntityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityMove} EntityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.z = reader.double();
                    break;
                case 5:
                    message.rotation = reader.float();
                    break;
                case 6:
                    message.pitch = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityMove} EntityMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityMove message.
         * @function verify
         * @memberof EntityMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                if (typeof message.pitch !== "number")
                    return "pitch: number expected";
            return null;
        };
    
        /**
         * Creates an EntityMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityMove} EntityMove
         */
        EntityMove.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityMove)
                return object;
            var message = new $root.EntityMove();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            if (object.pitch != null)
                message.pitch = Number(object.pitch);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityMove
         * @static
         * @param {EntityMove} message EntityMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.rotation = 0;
                object.pitch = 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.pitch != null && message.hasOwnProperty("pitch"))
                object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
            return object;
        };
    
        /**
         * Converts this EntityMove to JSON.
         * @function toJSON
         * @memberof EntityMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityMove;
    })();
    
    $root.EntityNameUpdate = (function() {
    
        /**
         * Properties of an EntityNameUpdate.
         * @exports IEntityNameUpdate
         * @interface IEntityNameUpdate
         * @property {string|null} [uuid] EntityNameUpdate uuid
         * @property {string|null} [name] EntityNameUpdate name
         * @property {boolean|null} [visible] EntityNameUpdate visible
         */
    
        /**
         * Constructs a new EntityNameUpdate.
         * @exports EntityNameUpdate
         * @classdesc Represents an EntityNameUpdate.
         * @implements IEntityNameUpdate
         * @constructor
         * @param {IEntityNameUpdate=} [properties] Properties to set
         */
        function EntityNameUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityNameUpdate uuid.
         * @member {string} uuid
         * @memberof EntityNameUpdate
         * @instance
         */
        EntityNameUpdate.prototype.uuid = "";
    
        /**
         * EntityNameUpdate name.
         * @member {string} name
         * @memberof EntityNameUpdate
         * @instance
         */
        EntityNameUpdate.prototype.name = "";
    
        /**
         * EntityNameUpdate visible.
         * @member {boolean} visible
         * @memberof EntityNameUpdate
         * @instance
         */
        EntityNameUpdate.prototype.visible = false;
    
        /**
         * Creates a new EntityNameUpdate instance using the specified properties.
         * @function create
         * @memberof EntityNameUpdate
         * @static
         * @param {IEntityNameUpdate=} [properties] Properties to set
         * @returns {EntityNameUpdate} EntityNameUpdate instance
         */
        EntityNameUpdate.create = function create(properties) {
            return new EntityNameUpdate(properties);
        };
    
        /**
         * Encodes the specified EntityNameUpdate message. Does not implicitly {@link EntityNameUpdate.verify|verify} messages.
         * @function encode
         * @memberof EntityNameUpdate
         * @static
         * @param {IEntityNameUpdate} message EntityNameUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityNameUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.visible);
            return writer;
        };
    
        /**
         * Encodes the specified EntityNameUpdate message, length delimited. Does not implicitly {@link EntityNameUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityNameUpdate
         * @static
         * @param {IEntityNameUpdate} message EntityNameUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityNameUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityNameUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityNameUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityNameUpdate} EntityNameUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityNameUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityNameUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.visible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityNameUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityNameUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityNameUpdate} EntityNameUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityNameUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityNameUpdate message.
         * @function verify
         * @memberof EntityNameUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityNameUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            return null;
        };
    
        /**
         * Creates an EntityNameUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityNameUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityNameUpdate} EntityNameUpdate
         */
        EntityNameUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityNameUpdate)
                return object;
            var message = new $root.EntityNameUpdate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityNameUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityNameUpdate
         * @static
         * @param {EntityNameUpdate} message EntityNameUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityNameUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.name = "";
                object.visible = false;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            return object;
        };
    
        /**
         * Converts this EntityNameUpdate to JSON.
         * @function toJSON
         * @memberof EntityNameUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityNameUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityNameUpdate;
    })();
    
    $root.EntityHeldItem = (function() {
    
        /**
         * Properties of an EntityHeldItem.
         * @exports IEntityHeldItem
         * @interface IEntityHeldItem
         * @property {string|null} [uuid] EntityHeldItem uuid
         * @property {string|null} [id] EntityHeldItem id
         */
    
        /**
         * Constructs a new EntityHeldItem.
         * @exports EntityHeldItem
         * @classdesc Represents an EntityHeldItem.
         * @implements IEntityHeldItem
         * @constructor
         * @param {IEntityHeldItem=} [properties] Properties to set
         */
        function EntityHeldItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityHeldItem uuid.
         * @member {string} uuid
         * @memberof EntityHeldItem
         * @instance
         */
        EntityHeldItem.prototype.uuid = "";
    
        /**
         * EntityHeldItem id.
         * @member {string} id
         * @memberof EntityHeldItem
         * @instance
         */
        EntityHeldItem.prototype.id = "";
    
        /**
         * Creates a new EntityHeldItem instance using the specified properties.
         * @function create
         * @memberof EntityHeldItem
         * @static
         * @param {IEntityHeldItem=} [properties] Properties to set
         * @returns {EntityHeldItem} EntityHeldItem instance
         */
        EntityHeldItem.create = function create(properties) {
            return new EntityHeldItem(properties);
        };
    
        /**
         * Encodes the specified EntityHeldItem message. Does not implicitly {@link EntityHeldItem.verify|verify} messages.
         * @function encode
         * @memberof EntityHeldItem
         * @static
         * @param {IEntityHeldItem} message EntityHeldItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityHeldItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            return writer;
        };
    
        /**
         * Encodes the specified EntityHeldItem message, length delimited. Does not implicitly {@link EntityHeldItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityHeldItem
         * @static
         * @param {IEntityHeldItem} message EntityHeldItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityHeldItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityHeldItem message from the specified reader or buffer.
         * @function decode
         * @memberof EntityHeldItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityHeldItem} EntityHeldItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityHeldItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityHeldItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityHeldItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityHeldItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityHeldItem} EntityHeldItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityHeldItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityHeldItem message.
         * @function verify
         * @memberof EntityHeldItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityHeldItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };
    
        /**
         * Creates an EntityHeldItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityHeldItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityHeldItem} EntityHeldItem
         */
        EntityHeldItem.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityHeldItem)
                return object;
            var message = new $root.EntityHeldItem();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityHeldItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityHeldItem
         * @static
         * @param {EntityHeldItem} message EntityHeldItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityHeldItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.id = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };
    
        /**
         * Converts this EntityHeldItem to JSON.
         * @function toJSON
         * @memberof EntityHeldItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityHeldItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityHeldItem;
    })();
    
    $root.EntityArmor = (function() {
    
        /**
         * Properties of an EntityArmor.
         * @exports IEntityArmor
         * @interface IEntityArmor
         * @property {string|null} [uuid] EntityArmor uuid
         * @property {number|null} [type] EntityArmor type
         * @property {string|null} [id] EntityArmor id
         */
    
        /**
         * Constructs a new EntityArmor.
         * @exports EntityArmor
         * @classdesc Represents an EntityArmor.
         * @implements IEntityArmor
         * @constructor
         * @param {IEntityArmor=} [properties] Properties to set
         */
        function EntityArmor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityArmor uuid.
         * @member {string} uuid
         * @memberof EntityArmor
         * @instance
         */
        EntityArmor.prototype.uuid = "";
    
        /**
         * EntityArmor type.
         * @member {number} type
         * @memberof EntityArmor
         * @instance
         */
        EntityArmor.prototype.type = 0;
    
        /**
         * EntityArmor id.
         * @member {string} id
         * @memberof EntityArmor
         * @instance
         */
        EntityArmor.prototype.id = "";
    
        /**
         * Creates a new EntityArmor instance using the specified properties.
         * @function create
         * @memberof EntityArmor
         * @static
         * @param {IEntityArmor=} [properties] Properties to set
         * @returns {EntityArmor} EntityArmor instance
         */
        EntityArmor.create = function create(properties) {
            return new EntityArmor(properties);
        };
    
        /**
         * Encodes the specified EntityArmor message. Does not implicitly {@link EntityArmor.verify|verify} messages.
         * @function encode
         * @memberof EntityArmor
         * @static
         * @param {IEntityArmor} message EntityArmor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityArmor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            return writer;
        };
    
        /**
         * Encodes the specified EntityArmor message, length delimited. Does not implicitly {@link EntityArmor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityArmor
         * @static
         * @param {IEntityArmor} message EntityArmor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityArmor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityArmor message from the specified reader or buffer.
         * @function decode
         * @memberof EntityArmor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityArmor} EntityArmor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityArmor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityArmor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityArmor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityArmor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityArmor} EntityArmor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityArmor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityArmor message.
         * @function verify
         * @memberof EntityArmor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityArmor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };
    
        /**
         * Creates an EntityArmor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityArmor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityArmor} EntityArmor
         */
        EntityArmor.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityArmor)
                return object;
            var message = new $root.EntityArmor();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityArmor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityArmor
         * @static
         * @param {EntityArmor} message EntityArmor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityArmor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.type = 0;
                object.id = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };
    
        /**
         * Converts this EntityArmor to JSON.
         * @function toJSON
         * @memberof EntityArmor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityArmor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityArmor;
    })();
    
    $root.EntityAnimate = (function() {
    
        /**
         * Properties of an EntityAnimate.
         * @exports IEntityAnimate
         * @interface IEntityAnimate
         * @property {string|null} [uuid] EntityAnimate uuid
         * @property {string|null} [animation] EntityAnimate animation
         * @property {number|null} [time] EntityAnimate time
         * @property {boolean|null} [replace] EntityAnimate replace
         */
    
        /**
         * Constructs a new EntityAnimate.
         * @exports EntityAnimate
         * @classdesc Represents an EntityAnimate.
         * @implements IEntityAnimate
         * @constructor
         * @param {IEntityAnimate=} [properties] Properties to set
         */
        function EntityAnimate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EntityAnimate uuid.
         * @member {string} uuid
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.uuid = "";
    
        /**
         * EntityAnimate animation.
         * @member {string} animation
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.animation = "";
    
        /**
         * EntityAnimate time.
         * @member {number} time
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.time = 0;
    
        /**
         * EntityAnimate replace.
         * @member {boolean} replace
         * @memberof EntityAnimate
         * @instance
         */
        EntityAnimate.prototype.replace = false;
    
        /**
         * Creates a new EntityAnimate instance using the specified properties.
         * @function create
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate=} [properties] Properties to set
         * @returns {EntityAnimate} EntityAnimate instance
         */
        EntityAnimate.create = function create(properties) {
            return new EntityAnimate(properties);
        };
    
        /**
         * Encodes the specified EntityAnimate message. Does not implicitly {@link EntityAnimate.verify|verify} messages.
         * @function encode
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate} message EntityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityAnimate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.animation != null && Object.hasOwnProperty.call(message, "animation"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.animation);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.time);
            if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.replace);
            return writer;
        };
    
        /**
         * Encodes the specified EntityAnimate message, length delimited. Does not implicitly {@link EntityAnimate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EntityAnimate
         * @static
         * @param {IEntityAnimate} message EntityAnimate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityAnimate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EntityAnimate message from the specified reader or buffer.
         * @function decode
         * @memberof EntityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EntityAnimate} EntityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityAnimate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityAnimate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.animation = reader.string();
                    break;
                case 3:
                    message.time = reader.uint32();
                    break;
                case 4:
                    message.replace = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EntityAnimate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EntityAnimate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EntityAnimate} EntityAnimate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityAnimate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EntityAnimate message.
         * @function verify
         * @memberof EntityAnimate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityAnimate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.animation != null && message.hasOwnProperty("animation"))
                if (!$util.isString(message.animation))
                    return "animation: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.replace != null && message.hasOwnProperty("replace"))
                if (typeof message.replace !== "boolean")
                    return "replace: boolean expected";
            return null;
        };
    
        /**
         * Creates an EntityAnimate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EntityAnimate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EntityAnimate} EntityAnimate
         */
        EntityAnimate.fromObject = function fromObject(object) {
            if (object instanceof $root.EntityAnimate)
                return object;
            var message = new $root.EntityAnimate();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.animation != null)
                message.animation = String(object.animation);
            if (object.time != null)
                message.time = object.time >>> 0;
            if (object.replace != null)
                message.replace = Boolean(object.replace);
            return message;
        };
    
        /**
         * Creates a plain object from an EntityAnimate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EntityAnimate
         * @static
         * @param {EntityAnimate} message EntityAnimate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityAnimate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.animation = "";
                object.time = 0;
                object.replace = false;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.animation != null && message.hasOwnProperty("animation"))
                object.animation = message.animation;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.replace != null && message.hasOwnProperty("replace"))
                object.replace = message.replace;
            return object;
        };
    
        /**
         * Converts this EntityAnimate to JSON.
         * @function toJSON
         * @memberof EntityAnimate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityAnimate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EntityAnimate;
    })();
    
    $root.WorldBlockUpdate = (function() {
    
        /**
         * Properties of a WorldBlockUpdate.
         * @exports IWorldBlockUpdate
         * @interface IWorldBlockUpdate
         * @property {number|null} [x] WorldBlockUpdate x
         * @property {number|null} [y] WorldBlockUpdate y
         * @property {number|null} [z] WorldBlockUpdate z
         * @property {number|null} [id] WorldBlockUpdate id
         * @property {boolean|null} [particles] WorldBlockUpdate particles
         */
    
        /**
         * Constructs a new WorldBlockUpdate.
         * @exports WorldBlockUpdate
         * @classdesc Represents a WorldBlockUpdate.
         * @implements IWorldBlockUpdate
         * @constructor
         * @param {IWorldBlockUpdate=} [properties] Properties to set
         */
        function WorldBlockUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldBlockUpdate x.
         * @member {number} x
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.x = 0;
    
        /**
         * WorldBlockUpdate y.
         * @member {number} y
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.y = 0;
    
        /**
         * WorldBlockUpdate z.
         * @member {number} z
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.z = 0;
    
        /**
         * WorldBlockUpdate id.
         * @member {number} id
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.id = 0;
    
        /**
         * WorldBlockUpdate particles.
         * @member {boolean} particles
         * @memberof WorldBlockUpdate
         * @instance
         */
        WorldBlockUpdate.prototype.particles = false;
    
        /**
         * Creates a new WorldBlockUpdate instance using the specified properties.
         * @function create
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate=} [properties] Properties to set
         * @returns {WorldBlockUpdate} WorldBlockUpdate instance
         */
        WorldBlockUpdate.create = function create(properties) {
            return new WorldBlockUpdate(properties);
        };
    
        /**
         * Encodes the specified WorldBlockUpdate message. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
         * @function encode
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate} message WorldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldBlockUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.id);
            if (message.particles != null && Object.hasOwnProperty.call(message, "particles"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.particles);
            return writer;
        };
    
        /**
         * Encodes the specified WorldBlockUpdate message, length delimited. Does not implicitly {@link WorldBlockUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldBlockUpdate
         * @static
         * @param {IWorldBlockUpdate} message WorldBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldBlockUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldBlockUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof WorldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldBlockUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldBlockUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.id = reader.uint32();
                    break;
                case 5:
                    message.particles = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldBlockUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldBlockUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldBlockUpdate message.
         * @function verify
         * @memberof WorldBlockUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldBlockUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.particles != null && message.hasOwnProperty("particles"))
                if (typeof message.particles !== "boolean")
                    return "particles: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldBlockUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldBlockUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldBlockUpdate} WorldBlockUpdate
         */
        WorldBlockUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldBlockUpdate)
                return object;
            var message = new $root.WorldBlockUpdate();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.particles != null)
                message.particles = Boolean(object.particles);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldBlockUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldBlockUpdate
         * @static
         * @param {WorldBlockUpdate} message WorldBlockUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldBlockUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.id = 0;
                object.particles = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.particles != null && message.hasOwnProperty("particles"))
                object.particles = message.particles;
            return object;
        };
    
        /**
         * Converts this WorldBlockUpdate to JSON.
         * @function toJSON
         * @memberof WorldBlockUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldBlockUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldBlockUpdate;
    })();
    
    $root.WorldMultiBlockUpdate = (function() {
    
        /**
         * Properties of a WorldMultiBlockUpdate.
         * @exports IWorldMultiBlockUpdate
         * @interface IWorldMultiBlockUpdate
         * @property {Object.<string,IWorldBlockUpdate>|null} [blocks] WorldMultiBlockUpdate blocks
         */
    
        /**
         * Constructs a new WorldMultiBlockUpdate.
         * @exports WorldMultiBlockUpdate
         * @classdesc Represents a WorldMultiBlockUpdate.
         * @implements IWorldMultiBlockUpdate
         * @constructor
         * @param {IWorldMultiBlockUpdate=} [properties] Properties to set
         */
        function WorldMultiBlockUpdate(properties) {
            this.blocks = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldMultiBlockUpdate blocks.
         * @member {Object.<string,IWorldBlockUpdate>} blocks
         * @memberof WorldMultiBlockUpdate
         * @instance
         */
        WorldMultiBlockUpdate.prototype.blocks = $util.emptyObject;
    
        /**
         * Creates a new WorldMultiBlockUpdate instance using the specified properties.
         * @function create
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {IWorldMultiBlockUpdate=} [properties] Properties to set
         * @returns {WorldMultiBlockUpdate} WorldMultiBlockUpdate instance
         */
        WorldMultiBlockUpdate.create = function create(properties) {
            return new WorldMultiBlockUpdate(properties);
        };
    
        /**
         * Encodes the specified WorldMultiBlockUpdate message. Does not implicitly {@link WorldMultiBlockUpdate.verify|verify} messages.
         * @function encode
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {IWorldMultiBlockUpdate} message WorldMultiBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldMultiBlockUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocks != null && Object.hasOwnProperty.call(message, "blocks"))
                for (var keys = Object.keys(message.blocks), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.WorldBlockUpdate.encode(message.blocks[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };
    
        /**
         * Encodes the specified WorldMultiBlockUpdate message, length delimited. Does not implicitly {@link WorldMultiBlockUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {IWorldMultiBlockUpdate} message WorldMultiBlockUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldMultiBlockUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldMultiBlockUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldMultiBlockUpdate} WorldMultiBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldMultiBlockUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldMultiBlockUpdate(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.blocks === $util.emptyObject)
                        message.blocks = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int32();
                            break;
                        case 2:
                            value = $root.WorldBlockUpdate.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.blocks[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldMultiBlockUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldMultiBlockUpdate} WorldMultiBlockUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldMultiBlockUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldMultiBlockUpdate message.
         * @function verify
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldMultiBlockUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!$util.isObject(message.blocks))
                    return "blocks: object expected";
                var key = Object.keys(message.blocks);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "blocks: integer key{k:int32} expected";
                    {
                        var error = $root.WorldBlockUpdate.verify(message.blocks[key[i]]);
                        if (error)
                            return "blocks." + error;
                    }
                }
            }
            return null;
        };
    
        /**
         * Creates a WorldMultiBlockUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldMultiBlockUpdate} WorldMultiBlockUpdate
         */
        WorldMultiBlockUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldMultiBlockUpdate)
                return object;
            var message = new $root.WorldMultiBlockUpdate();
            if (object.blocks) {
                if (typeof object.blocks !== "object")
                    throw TypeError(".WorldMultiBlockUpdate.blocks: object expected");
                message.blocks = {};
                for (var keys = Object.keys(object.blocks), i = 0; i < keys.length; ++i) {
                    if (typeof object.blocks[keys[i]] !== "object")
                        throw TypeError(".WorldMultiBlockUpdate.blocks: object expected");
                    message.blocks[keys[i]] = $root.WorldBlockUpdate.fromObject(object.blocks[keys[i]]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a WorldMultiBlockUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldMultiBlockUpdate
         * @static
         * @param {WorldMultiBlockUpdate} message WorldMultiBlockUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldMultiBlockUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.blocks = {};
            var keys2;
            if (message.blocks && (keys2 = Object.keys(message.blocks)).length) {
                object.blocks = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.blocks[keys2[j]] = $root.WorldBlockUpdate.toObject(message.blocks[keys2[j]], options);
            }
            return object;
        };
    
        /**
         * Converts this WorldMultiBlockUpdate to JSON.
         * @function toJSON
         * @memberof WorldMultiBlockUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldMultiBlockUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldMultiBlockUpdate;
    })();
    
    $root.WorldChunkLoad = (function() {
    
        /**
         * Properties of a WorldChunkLoad.
         * @exports IWorldChunkLoad
         * @interface IWorldChunkLoad
         * @property {number|null} [x] WorldChunkLoad x
         * @property {number|null} [y] WorldChunkLoad y
         * @property {number|null} [z] WorldChunkLoad z
         * @property {Uint8Array|null} [data] WorldChunkLoad data
         * @property {number|null} [height] WorldChunkLoad height
         * @property {boolean|null} [compressed] WorldChunkLoad compressed
         */
    
        /**
         * Constructs a new WorldChunkLoad.
         * @exports WorldChunkLoad
         * @classdesc Represents a WorldChunkLoad.
         * @implements IWorldChunkLoad
         * @constructor
         * @param {IWorldChunkLoad=} [properties] Properties to set
         */
        function WorldChunkLoad(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkLoad x.
         * @member {number} x
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.x = 0;
    
        /**
         * WorldChunkLoad y.
         * @member {number} y
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.y = 0;
    
        /**
         * WorldChunkLoad z.
         * @member {number} z
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.z = 0;
    
        /**
         * WorldChunkLoad data.
         * @member {Uint8Array} data
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.data = $util.newBuffer([]);
    
        /**
         * WorldChunkLoad height.
         * @member {number} height
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.height = 0;
    
        /**
         * WorldChunkLoad compressed.
         * @member {boolean} compressed
         * @memberof WorldChunkLoad
         * @instance
         */
        WorldChunkLoad.prototype.compressed = false;
    
        /**
         * Creates a new WorldChunkLoad instance using the specified properties.
         * @function create
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad=} [properties] Properties to set
         * @returns {WorldChunkLoad} WorldChunkLoad instance
         */
        WorldChunkLoad.create = function create(properties) {
            return new WorldChunkLoad(properties);
        };
    
        /**
         * Encodes the specified WorldChunkLoad message. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad} message WorldChunkLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkLoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.height);
            if (message.compressed != null && Object.hasOwnProperty.call(message, "compressed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.compressed);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkLoad message, length delimited. Does not implicitly {@link WorldChunkLoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkLoad
         * @static
         * @param {IWorldChunkLoad} message WorldChunkLoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkLoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkLoad message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkLoad} WorldChunkLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkLoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkLoad();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                case 5:
                    message.height = reader.sint32();
                    break;
                case 6:
                    message.compressed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunkLoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkLoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkLoad} WorldChunkLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkLoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkLoad message.
         * @function verify
         * @memberof WorldChunkLoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkLoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.compressed != null && message.hasOwnProperty("compressed"))
                if (typeof message.compressed !== "boolean")
                    return "compressed: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkLoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkLoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkLoad} WorldChunkLoad
         */
        WorldChunkLoad.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkLoad)
                return object;
            var message = new $root.WorldChunkLoad();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.compressed != null)
                message.compressed = Boolean(object.compressed);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkLoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkLoad
         * @static
         * @param {WorldChunkLoad} message WorldChunkLoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkLoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.height = 0;
                object.compressed = false;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.compressed != null && message.hasOwnProperty("compressed"))
                object.compressed = message.compressed;
            return object;
        };
    
        /**
         * Converts this WorldChunkLoad to JSON.
         * @function toJSON
         * @memberof WorldChunkLoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkLoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkLoad;
    })();
    
    $root.WorldChunkUnload = (function() {
    
        /**
         * Properties of a WorldChunkUnload.
         * @exports IWorldChunkUnload
         * @interface IWorldChunkUnload
         * @property {number|null} [x] WorldChunkUnload x
         * @property {number|null} [y] WorldChunkUnload y
         * @property {number|null} [z] WorldChunkUnload z
         * @property {number|null} [height] WorldChunkUnload height
         */
    
        /**
         * Constructs a new WorldChunkUnload.
         * @exports WorldChunkUnload
         * @classdesc Represents a WorldChunkUnload.
         * @implements IWorldChunkUnload
         * @constructor
         * @param {IWorldChunkUnload=} [properties] Properties to set
         */
        function WorldChunkUnload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkUnload x.
         * @member {number} x
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.x = 0;
    
        /**
         * WorldChunkUnload y.
         * @member {number} y
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.y = 0;
    
        /**
         * WorldChunkUnload z.
         * @member {number} z
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.z = 0;
    
        /**
         * WorldChunkUnload height.
         * @member {number} height
         * @memberof WorldChunkUnload
         * @instance
         */
        WorldChunkUnload.prototype.height = 0;
    
        /**
         * Creates a new WorldChunkUnload instance using the specified properties.
         * @function create
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload=} [properties] Properties to set
         * @returns {WorldChunkUnload} WorldChunkUnload instance
         */
        WorldChunkUnload.create = function create(properties) {
            return new WorldChunkUnload(properties);
        };
    
        /**
         * Encodes the specified WorldChunkUnload message. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload} message WorldChunkUnload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkUnload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkUnload message, length delimited. Does not implicitly {@link WorldChunkUnload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkUnload
         * @static
         * @param {IWorldChunkUnload} message WorldChunkUnload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkUnload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkUnload message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkUnload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkUnload} WorldChunkUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkUnload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkUnload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                case 4:
                    message.height = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunkUnload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkUnload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkUnload} WorldChunkUnload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkUnload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkUnload message.
         * @function verify
         * @memberof WorldChunkUnload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkUnload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkUnload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkUnload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkUnload} WorldChunkUnload
         */
        WorldChunkUnload.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkUnload)
                return object;
            var message = new $root.WorldChunkUnload();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.height != null)
                message.height = object.height | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkUnload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkUnload
         * @static
         * @param {WorldChunkUnload} message WorldChunkUnload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkUnload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
                object.height = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this WorldChunkUnload to JSON.
         * @function toJSON
         * @memberof WorldChunkUnload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkUnload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkUnload;
    })();
    
    $root.WorldChunkIsLoaded = (function() {
    
        /**
         * Properties of a WorldChunkIsLoaded.
         * @exports IWorldChunkIsLoaded
         * @interface IWorldChunkIsLoaded
         * @property {number|null} [x] WorldChunkIsLoaded x
         * @property {number|null} [y] WorldChunkIsLoaded y
         * @property {number|null} [z] WorldChunkIsLoaded z
         */
    
        /**
         * Constructs a new WorldChunkIsLoaded.
         * @exports WorldChunkIsLoaded
         * @classdesc Represents a WorldChunkIsLoaded.
         * @implements IWorldChunkIsLoaded
         * @constructor
         * @param {IWorldChunkIsLoaded=} [properties] Properties to set
         */
        function WorldChunkIsLoaded(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunkIsLoaded x.
         * @member {number} x
         * @memberof WorldChunkIsLoaded
         * @instance
         */
        WorldChunkIsLoaded.prototype.x = 0;
    
        /**
         * WorldChunkIsLoaded y.
         * @member {number} y
         * @memberof WorldChunkIsLoaded
         * @instance
         */
        WorldChunkIsLoaded.prototype.y = 0;
    
        /**
         * WorldChunkIsLoaded z.
         * @member {number} z
         * @memberof WorldChunkIsLoaded
         * @instance
         */
        WorldChunkIsLoaded.prototype.z = 0;
    
        /**
         * Creates a new WorldChunkIsLoaded instance using the specified properties.
         * @function create
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {IWorldChunkIsLoaded=} [properties] Properties to set
         * @returns {WorldChunkIsLoaded} WorldChunkIsLoaded instance
         */
        WorldChunkIsLoaded.create = function create(properties) {
            return new WorldChunkIsLoaded(properties);
        };
    
        /**
         * Encodes the specified WorldChunkIsLoaded message. Does not implicitly {@link WorldChunkIsLoaded.verify|verify} messages.
         * @function encode
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {IWorldChunkIsLoaded} message WorldChunkIsLoaded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkIsLoaded.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunkIsLoaded message, length delimited. Does not implicitly {@link WorldChunkIsLoaded.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {IWorldChunkIsLoaded} message WorldChunkIsLoaded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunkIsLoaded.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunkIsLoaded message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunkIsLoaded} WorldChunkIsLoaded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkIsLoaded.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunkIsLoaded();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.z = reader.sint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunkIsLoaded message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunkIsLoaded} WorldChunkIsLoaded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunkIsLoaded.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunkIsLoaded message.
         * @function verify
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunkIsLoaded.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            return null;
        };
    
        /**
         * Creates a WorldChunkIsLoaded message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunkIsLoaded} WorldChunkIsLoaded
         */
        WorldChunkIsLoaded.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunkIsLoaded)
                return object;
            var message = new $root.WorldChunkIsLoaded();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunkIsLoaded message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunkIsLoaded
         * @static
         * @param {WorldChunkIsLoaded} message WorldChunkIsLoaded
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunkIsLoaded.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            return object;
        };
    
        /**
         * Converts this WorldChunkIsLoaded to JSON.
         * @function toJSON
         * @memberof WorldChunkIsLoaded
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunkIsLoaded.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunkIsLoaded;
    })();
    
    $root.WorldChunksRemoveAll = (function() {
    
        /**
         * Properties of a WorldChunksRemoveAll.
         * @exports IWorldChunksRemoveAll
         * @interface IWorldChunksRemoveAll
         * @property {boolean|null} [confirm] WorldChunksRemoveAll confirm
         */
    
        /**
         * Constructs a new WorldChunksRemoveAll.
         * @exports WorldChunksRemoveAll
         * @classdesc Represents a WorldChunksRemoveAll.
         * @implements IWorldChunksRemoveAll
         * @constructor
         * @param {IWorldChunksRemoveAll=} [properties] Properties to set
         */
        function WorldChunksRemoveAll(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * WorldChunksRemoveAll confirm.
         * @member {boolean} confirm
         * @memberof WorldChunksRemoveAll
         * @instance
         */
        WorldChunksRemoveAll.prototype.confirm = false;
    
        /**
         * Creates a new WorldChunksRemoveAll instance using the specified properties.
         * @function create
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {IWorldChunksRemoveAll=} [properties] Properties to set
         * @returns {WorldChunksRemoveAll} WorldChunksRemoveAll instance
         */
        WorldChunksRemoveAll.create = function create(properties) {
            return new WorldChunksRemoveAll(properties);
        };
    
        /**
         * Encodes the specified WorldChunksRemoveAll message. Does not implicitly {@link WorldChunksRemoveAll.verify|verify} messages.
         * @function encode
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {IWorldChunksRemoveAll} message WorldChunksRemoveAll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunksRemoveAll.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.confirm != null && Object.hasOwnProperty.call(message, "confirm"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.confirm);
            return writer;
        };
    
        /**
         * Encodes the specified WorldChunksRemoveAll message, length delimited. Does not implicitly {@link WorldChunksRemoveAll.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {IWorldChunksRemoveAll} message WorldChunksRemoveAll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChunksRemoveAll.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a WorldChunksRemoveAll message from the specified reader or buffer.
         * @function decode
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {WorldChunksRemoveAll} WorldChunksRemoveAll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunksRemoveAll.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorldChunksRemoveAll();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.confirm = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a WorldChunksRemoveAll message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WorldChunksRemoveAll} WorldChunksRemoveAll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChunksRemoveAll.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a WorldChunksRemoveAll message.
         * @function verify
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChunksRemoveAll.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                if (typeof message.confirm !== "boolean")
                    return "confirm: boolean expected";
            return null;
        };
    
        /**
         * Creates a WorldChunksRemoveAll message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {WorldChunksRemoveAll} WorldChunksRemoveAll
         */
        WorldChunksRemoveAll.fromObject = function fromObject(object) {
            if (object instanceof $root.WorldChunksRemoveAll)
                return object;
            var message = new $root.WorldChunksRemoveAll();
            if (object.confirm != null)
                message.confirm = Boolean(object.confirm);
            return message;
        };
    
        /**
         * Creates a plain object from a WorldChunksRemoveAll message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WorldChunksRemoveAll
         * @static
         * @param {WorldChunksRemoveAll} message WorldChunksRemoveAll
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChunksRemoveAll.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.confirm = false;
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                object.confirm = message.confirm;
            return object;
        };
    
        /**
         * Converts this WorldChunksRemoveAll to JSON.
         * @function toJSON
         * @memberof WorldChunksRemoveAll
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChunksRemoveAll.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return WorldChunksRemoveAll;
    })();
    
    $root.RegistryUpdate = (function() {
    
        /**
         * Properties of a RegistryUpdate.
         * @exports IRegistryUpdate
         * @interface IRegistryUpdate
         * @property {string|null} [itemsDef] RegistryUpdate itemsDef
         * @property {string|null} [blocksDef] RegistryUpdate blocksDef
         */
    
        /**
         * Constructs a new RegistryUpdate.
         * @exports RegistryUpdate
         * @classdesc Represents a RegistryUpdate.
         * @implements IRegistryUpdate
         * @constructor
         * @param {IRegistryUpdate=} [properties] Properties to set
         */
        function RegistryUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RegistryUpdate itemsDef.
         * @member {string} itemsDef
         * @memberof RegistryUpdate
         * @instance
         */
        RegistryUpdate.prototype.itemsDef = "";
    
        /**
         * RegistryUpdate blocksDef.
         * @member {string} blocksDef
         * @memberof RegistryUpdate
         * @instance
         */
        RegistryUpdate.prototype.blocksDef = "";
    
        /**
         * Creates a new RegistryUpdate instance using the specified properties.
         * @function create
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate=} [properties] Properties to set
         * @returns {RegistryUpdate} RegistryUpdate instance
         */
        RegistryUpdate.create = function create(properties) {
            return new RegistryUpdate(properties);
        };
    
        /**
         * Encodes the specified RegistryUpdate message. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
         * @function encode
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate} message RegistryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistryUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemsDef != null && Object.hasOwnProperty.call(message, "itemsDef"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemsDef);
            if (message.blocksDef != null && Object.hasOwnProperty.call(message, "blocksDef"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.blocksDef);
            return writer;
        };
    
        /**
         * Encodes the specified RegistryUpdate message, length delimited. Does not implicitly {@link RegistryUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RegistryUpdate
         * @static
         * @param {IRegistryUpdate} message RegistryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistryUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RegistryUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof RegistryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RegistryUpdate} RegistryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistryUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegistryUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemsDef = reader.string();
                    break;
                case 2:
                    message.blocksDef = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RegistryUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RegistryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RegistryUpdate} RegistryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistryUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RegistryUpdate message.
         * @function verify
         * @memberof RegistryUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistryUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                if (!$util.isString(message.itemsDef))
                    return "itemsDef: string expected";
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                if (!$util.isString(message.blocksDef))
                    return "blocksDef: string expected";
            return null;
        };
    
        /**
         * Creates a RegistryUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RegistryUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RegistryUpdate} RegistryUpdate
         */
        RegistryUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.RegistryUpdate)
                return object;
            var message = new $root.RegistryUpdate();
            if (object.itemsDef != null)
                message.itemsDef = String(object.itemsDef);
            if (object.blocksDef != null)
                message.blocksDef = String(object.blocksDef);
            return message;
        };
    
        /**
         * Creates a plain object from a RegistryUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RegistryUpdate
         * @static
         * @param {RegistryUpdate} message RegistryUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistryUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemsDef = "";
                object.blocksDef = "";
            }
            if (message.itemsDef != null && message.hasOwnProperty("itemsDef"))
                object.itemsDef = message.itemsDef;
            if (message.blocksDef != null && message.hasOwnProperty("blocksDef"))
                object.blocksDef = message.blocksDef;
            return object;
        };
    
        /**
         * Converts this RegistryUpdate to JSON.
         * @function toJSON
         * @memberof RegistryUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistryUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RegistryUpdate;
    })();
    
    $root.EnvironmentFogUpdate = (function() {
    
        /**
         * Properties of an EnvironmentFogUpdate.
         * @exports IEnvironmentFogUpdate
         * @interface IEnvironmentFogUpdate
         * @property {number|null} [mode] EnvironmentFogUpdate mode
         * @property {number|null} [density] EnvironmentFogUpdate density
         * @property {number|null} [start] EnvironmentFogUpdate start
         * @property {number|null} [end] EnvironmentFogUpdate end
         * @property {number|null} [colorRed] EnvironmentFogUpdate colorRed
         * @property {number|null} [colorGreen] EnvironmentFogUpdate colorGreen
         * @property {number|null} [colorBlue] EnvironmentFogUpdate colorBlue
         */
    
        /**
         * Constructs a new EnvironmentFogUpdate.
         * @exports EnvironmentFogUpdate
         * @classdesc Represents an EnvironmentFogUpdate.
         * @implements IEnvironmentFogUpdate
         * @constructor
         * @param {IEnvironmentFogUpdate=} [properties] Properties to set
         */
        function EnvironmentFogUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EnvironmentFogUpdate mode.
         * @member {number} mode
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.mode = 0;
    
        /**
         * EnvironmentFogUpdate density.
         * @member {number} density
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.density = 0;
    
        /**
         * EnvironmentFogUpdate start.
         * @member {number} start
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.start = 0;
    
        /**
         * EnvironmentFogUpdate end.
         * @member {number} end
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.end = 0;
    
        /**
         * EnvironmentFogUpdate colorRed.
         * @member {number} colorRed
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.colorRed = 0;
    
        /**
         * EnvironmentFogUpdate colorGreen.
         * @member {number} colorGreen
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.colorGreen = 0;
    
        /**
         * EnvironmentFogUpdate colorBlue.
         * @member {number} colorBlue
         * @memberof EnvironmentFogUpdate
         * @instance
         */
        EnvironmentFogUpdate.prototype.colorBlue = 0;
    
        /**
         * Creates a new EnvironmentFogUpdate instance using the specified properties.
         * @function create
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {IEnvironmentFogUpdate=} [properties] Properties to set
         * @returns {EnvironmentFogUpdate} EnvironmentFogUpdate instance
         */
        EnvironmentFogUpdate.create = function create(properties) {
            return new EnvironmentFogUpdate(properties);
        };
    
        /**
         * Encodes the specified EnvironmentFogUpdate message. Does not implicitly {@link EnvironmentFogUpdate.verify|verify} messages.
         * @function encode
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {IEnvironmentFogUpdate} message EnvironmentFogUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvironmentFogUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mode);
            if (message.density != null && Object.hasOwnProperty.call(message, "density"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.density);
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.end);
            if (message.colorRed != null && Object.hasOwnProperty.call(message, "colorRed"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.colorRed);
            if (message.colorGreen != null && Object.hasOwnProperty.call(message, "colorGreen"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.colorGreen);
            if (message.colorBlue != null && Object.hasOwnProperty.call(message, "colorBlue"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.colorBlue);
            return writer;
        };
    
        /**
         * Encodes the specified EnvironmentFogUpdate message, length delimited. Does not implicitly {@link EnvironmentFogUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {IEnvironmentFogUpdate} message EnvironmentFogUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvironmentFogUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EnvironmentFogUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EnvironmentFogUpdate} EnvironmentFogUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvironmentFogUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnvironmentFogUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mode = reader.uint32();
                    break;
                case 2:
                    message.density = reader.float();
                    break;
                case 3:
                    message.start = reader.float();
                    break;
                case 4:
                    message.end = reader.float();
                    break;
                case 5:
                    message.colorRed = reader.float();
                    break;
                case 6:
                    message.colorGreen = reader.float();
                    break;
                case 7:
                    message.colorBlue = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EnvironmentFogUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EnvironmentFogUpdate} EnvironmentFogUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvironmentFogUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EnvironmentFogUpdate message.
         * @function verify
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnvironmentFogUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.density != null && message.hasOwnProperty("density"))
                if (typeof message.density !== "number")
                    return "density: number expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start !== "number")
                    return "start: number expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (typeof message.end !== "number")
                    return "end: number expected";
            if (message.colorRed != null && message.hasOwnProperty("colorRed"))
                if (typeof message.colorRed !== "number")
                    return "colorRed: number expected";
            if (message.colorGreen != null && message.hasOwnProperty("colorGreen"))
                if (typeof message.colorGreen !== "number")
                    return "colorGreen: number expected";
            if (message.colorBlue != null && message.hasOwnProperty("colorBlue"))
                if (typeof message.colorBlue !== "number")
                    return "colorBlue: number expected";
            return null;
        };
    
        /**
         * Creates an EnvironmentFogUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EnvironmentFogUpdate} EnvironmentFogUpdate
         */
        EnvironmentFogUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.EnvironmentFogUpdate)
                return object;
            var message = new $root.EnvironmentFogUpdate();
            if (object.mode != null)
                message.mode = object.mode >>> 0;
            if (object.density != null)
                message.density = Number(object.density);
            if (object.start != null)
                message.start = Number(object.start);
            if (object.end != null)
                message.end = Number(object.end);
            if (object.colorRed != null)
                message.colorRed = Number(object.colorRed);
            if (object.colorGreen != null)
                message.colorGreen = Number(object.colorGreen);
            if (object.colorBlue != null)
                message.colorBlue = Number(object.colorBlue);
            return message;
        };
    
        /**
         * Creates a plain object from an EnvironmentFogUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EnvironmentFogUpdate
         * @static
         * @param {EnvironmentFogUpdate} message EnvironmentFogUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnvironmentFogUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mode = 0;
                object.density = 0;
                object.start = 0;
                object.end = 0;
                object.colorRed = 0;
                object.colorGreen = 0;
                object.colorBlue = 0;
            }
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.density != null && message.hasOwnProperty("density"))
                object.density = options.json && !isFinite(message.density) ? String(message.density) : message.density;
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = options.json && !isFinite(message.start) ? String(message.start) : message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = options.json && !isFinite(message.end) ? String(message.end) : message.end;
            if (message.colorRed != null && message.hasOwnProperty("colorRed"))
                object.colorRed = options.json && !isFinite(message.colorRed) ? String(message.colorRed) : message.colorRed;
            if (message.colorGreen != null && message.hasOwnProperty("colorGreen"))
                object.colorGreen = options.json && !isFinite(message.colorGreen) ? String(message.colorGreen) : message.colorGreen;
            if (message.colorBlue != null && message.hasOwnProperty("colorBlue"))
                object.colorBlue = options.json && !isFinite(message.colorBlue) ? String(message.colorBlue) : message.colorBlue;
            return object;
        };
    
        /**
         * Converts this EnvironmentFogUpdate to JSON.
         * @function toJSON
         * @memberof EnvironmentFogUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnvironmentFogUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EnvironmentFogUpdate;
    })();
    
    $root.EnvironmentSkyUpdate = (function() {
    
        /**
         * Properties of an EnvironmentSkyUpdate.
         * @exports IEnvironmentSkyUpdate
         * @interface IEnvironmentSkyUpdate
         * @property {boolean|null} [clouds] EnvironmentSkyUpdate clouds
         * @property {number|null} [colorRed] EnvironmentSkyUpdate colorRed
         * @property {number|null} [colorGreen] EnvironmentSkyUpdate colorGreen
         * @property {number|null} [colorBlue] EnvironmentSkyUpdate colorBlue
         * @property {number|null} [colorRedTop] EnvironmentSkyUpdate colorRedTop
         * @property {number|null} [colorGreenTop] EnvironmentSkyUpdate colorGreenTop
         * @property {number|null} [colorBlueTop] EnvironmentSkyUpdate colorBlueTop
         */
    
        /**
         * Constructs a new EnvironmentSkyUpdate.
         * @exports EnvironmentSkyUpdate
         * @classdesc Represents an EnvironmentSkyUpdate.
         * @implements IEnvironmentSkyUpdate
         * @constructor
         * @param {IEnvironmentSkyUpdate=} [properties] Properties to set
         */
        function EnvironmentSkyUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EnvironmentSkyUpdate clouds.
         * @member {boolean} clouds
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.clouds = false;
    
        /**
         * EnvironmentSkyUpdate colorRed.
         * @member {number} colorRed
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorRed = 0;
    
        /**
         * EnvironmentSkyUpdate colorGreen.
         * @member {number} colorGreen
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorGreen = 0;
    
        /**
         * EnvironmentSkyUpdate colorBlue.
         * @member {number} colorBlue
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorBlue = 0;
    
        /**
         * EnvironmentSkyUpdate colorRedTop.
         * @member {number} colorRedTop
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorRedTop = 0;
    
        /**
         * EnvironmentSkyUpdate colorGreenTop.
         * @member {number} colorGreenTop
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorGreenTop = 0;
    
        /**
         * EnvironmentSkyUpdate colorBlueTop.
         * @member {number} colorBlueTop
         * @memberof EnvironmentSkyUpdate
         * @instance
         */
        EnvironmentSkyUpdate.prototype.colorBlueTop = 0;
    
        /**
         * Creates a new EnvironmentSkyUpdate instance using the specified properties.
         * @function create
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {IEnvironmentSkyUpdate=} [properties] Properties to set
         * @returns {EnvironmentSkyUpdate} EnvironmentSkyUpdate instance
         */
        EnvironmentSkyUpdate.create = function create(properties) {
            return new EnvironmentSkyUpdate(properties);
        };
    
        /**
         * Encodes the specified EnvironmentSkyUpdate message. Does not implicitly {@link EnvironmentSkyUpdate.verify|verify} messages.
         * @function encode
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {IEnvironmentSkyUpdate} message EnvironmentSkyUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvironmentSkyUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clouds != null && Object.hasOwnProperty.call(message, "clouds"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.clouds);
            if (message.colorRed != null && Object.hasOwnProperty.call(message, "colorRed"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.colorRed);
            if (message.colorGreen != null && Object.hasOwnProperty.call(message, "colorGreen"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.colorGreen);
            if (message.colorBlue != null && Object.hasOwnProperty.call(message, "colorBlue"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.colorBlue);
            if (message.colorRedTop != null && Object.hasOwnProperty.call(message, "colorRedTop"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.colorRedTop);
            if (message.colorGreenTop != null && Object.hasOwnProperty.call(message, "colorGreenTop"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.colorGreenTop);
            if (message.colorBlueTop != null && Object.hasOwnProperty.call(message, "colorBlueTop"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.colorBlueTop);
            return writer;
        };
    
        /**
         * Encodes the specified EnvironmentSkyUpdate message, length delimited. Does not implicitly {@link EnvironmentSkyUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {IEnvironmentSkyUpdate} message EnvironmentSkyUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnvironmentSkyUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EnvironmentSkyUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EnvironmentSkyUpdate} EnvironmentSkyUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvironmentSkyUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnvironmentSkyUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clouds = reader.bool();
                    break;
                case 2:
                    message.colorRed = reader.float();
                    break;
                case 3:
                    message.colorGreen = reader.float();
                    break;
                case 4:
                    message.colorBlue = reader.float();
                    break;
                case 5:
                    message.colorRedTop = reader.float();
                    break;
                case 6:
                    message.colorGreenTop = reader.float();
                    break;
                case 7:
                    message.colorBlueTop = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EnvironmentSkyUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EnvironmentSkyUpdate} EnvironmentSkyUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnvironmentSkyUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EnvironmentSkyUpdate message.
         * @function verify
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnvironmentSkyUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clouds != null && message.hasOwnProperty("clouds"))
                if (typeof message.clouds !== "boolean")
                    return "clouds: boolean expected";
            if (message.colorRed != null && message.hasOwnProperty("colorRed"))
                if (typeof message.colorRed !== "number")
                    return "colorRed: number expected";
            if (message.colorGreen != null && message.hasOwnProperty("colorGreen"))
                if (typeof message.colorGreen !== "number")
                    return "colorGreen: number expected";
            if (message.colorBlue != null && message.hasOwnProperty("colorBlue"))
                if (typeof message.colorBlue !== "number")
                    return "colorBlue: number expected";
            if (message.colorRedTop != null && message.hasOwnProperty("colorRedTop"))
                if (typeof message.colorRedTop !== "number")
                    return "colorRedTop: number expected";
            if (message.colorGreenTop != null && message.hasOwnProperty("colorGreenTop"))
                if (typeof message.colorGreenTop !== "number")
                    return "colorGreenTop: number expected";
            if (message.colorBlueTop != null && message.hasOwnProperty("colorBlueTop"))
                if (typeof message.colorBlueTop !== "number")
                    return "colorBlueTop: number expected";
            return null;
        };
    
        /**
         * Creates an EnvironmentSkyUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EnvironmentSkyUpdate} EnvironmentSkyUpdate
         */
        EnvironmentSkyUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.EnvironmentSkyUpdate)
                return object;
            var message = new $root.EnvironmentSkyUpdate();
            if (object.clouds != null)
                message.clouds = Boolean(object.clouds);
            if (object.colorRed != null)
                message.colorRed = Number(object.colorRed);
            if (object.colorGreen != null)
                message.colorGreen = Number(object.colorGreen);
            if (object.colorBlue != null)
                message.colorBlue = Number(object.colorBlue);
            if (object.colorRedTop != null)
                message.colorRedTop = Number(object.colorRedTop);
            if (object.colorGreenTop != null)
                message.colorGreenTop = Number(object.colorGreenTop);
            if (object.colorBlueTop != null)
                message.colorBlueTop = Number(object.colorBlueTop);
            return message;
        };
    
        /**
         * Creates a plain object from an EnvironmentSkyUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EnvironmentSkyUpdate
         * @static
         * @param {EnvironmentSkyUpdate} message EnvironmentSkyUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnvironmentSkyUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clouds = false;
                object.colorRed = 0;
                object.colorGreen = 0;
                object.colorBlue = 0;
                object.colorRedTop = 0;
                object.colorGreenTop = 0;
                object.colorBlueTop = 0;
            }
            if (message.clouds != null && message.hasOwnProperty("clouds"))
                object.clouds = message.clouds;
            if (message.colorRed != null && message.hasOwnProperty("colorRed"))
                object.colorRed = options.json && !isFinite(message.colorRed) ? String(message.colorRed) : message.colorRed;
            if (message.colorGreen != null && message.hasOwnProperty("colorGreen"))
                object.colorGreen = options.json && !isFinite(message.colorGreen) ? String(message.colorGreen) : message.colorGreen;
            if (message.colorBlue != null && message.hasOwnProperty("colorBlue"))
                object.colorBlue = options.json && !isFinite(message.colorBlue) ? String(message.colorBlue) : message.colorBlue;
            if (message.colorRedTop != null && message.hasOwnProperty("colorRedTop"))
                object.colorRedTop = options.json && !isFinite(message.colorRedTop) ? String(message.colorRedTop) : message.colorRedTop;
            if (message.colorGreenTop != null && message.hasOwnProperty("colorGreenTop"))
                object.colorGreenTop = options.json && !isFinite(message.colorGreenTop) ? String(message.colorGreenTop) : message.colorGreenTop;
            if (message.colorBlueTop != null && message.hasOwnProperty("colorBlueTop"))
                object.colorBlueTop = options.json && !isFinite(message.colorBlueTop) ? String(message.colorBlueTop) : message.colorBlueTop;
            return object;
        };
    
        /**
         * Converts this EnvironmentSkyUpdate to JSON.
         * @function toJSON
         * @memberof EnvironmentSkyUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnvironmentSkyUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EnvironmentSkyUpdate;
    })();
    
    $root.PluginMessage = (function() {
    
        /**
         * Properties of a PluginMessage.
         * @exports IPluginMessage
         * @interface IPluginMessage
         * @property {string|null} [key] PluginMessage key
         * @property {number|null} [version] PluginMessage version
         * @property {Uint8Array|null} [value] PluginMessage value
         */
    
        /**
         * Constructs a new PluginMessage.
         * @exports PluginMessage
         * @classdesc Represents a PluginMessage.
         * @implements IPluginMessage
         * @constructor
         * @param {IPluginMessage=} [properties] Properties to set
         */
        function PluginMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PluginMessage key.
         * @member {string} key
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.key = "";
    
        /**
         * PluginMessage version.
         * @member {number} version
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.version = 0;
    
        /**
         * PluginMessage value.
         * @member {Uint8Array} value
         * @memberof PluginMessage
         * @instance
         */
        PluginMessage.prototype.value = $util.newBuffer([]);
    
        /**
         * Creates a new PluginMessage instance using the specified properties.
         * @function create
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage=} [properties] Properties to set
         * @returns {PluginMessage} PluginMessage instance
         */
        PluginMessage.create = function create(properties) {
            return new PluginMessage(properties);
        };
    
        /**
         * Encodes the specified PluginMessage message. Does not implicitly {@link PluginMessage.verify|verify} messages.
         * @function encode
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified PluginMessage message, length delimited. Does not implicitly {@link PluginMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PluginMessage
         * @static
         * @param {IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PluginMessage message from the specified reader or buffer.
         * @function decode
         * @memberof PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PluginMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.version = reader.uint32();
                    break;
                case 3:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PluginMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PluginMessage message.
         * @function verify
         * @memberof PluginMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };
    
        /**
         * Creates a PluginMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PluginMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PluginMessage} PluginMessage
         */
        PluginMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.PluginMessage)
                return object;
            var message = new $root.PluginMessage();
            if (object.key != null)
                message.key = String(object.key);
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length)
                    message.value = object.value;
            return message;
        };
    
        /**
         * Creates a plain object from a PluginMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PluginMessage
         * @static
         * @param {PluginMessage} message PluginMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.version = 0;
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };
    
        /**
         * Converts this PluginMessage to JSON.
         * @function toJSON
         * @memberof PluginMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PluginMessage;
    })();

    return $root;
});
