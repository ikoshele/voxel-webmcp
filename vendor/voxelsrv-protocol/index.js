"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.parseToMessage = exports.parseToObject = exports.proxyVersionRevision = exports.proxyVersion = exports.protocolVersionRevision = exports.protocolVersion = void 0;
var client = __importStar(require("./js/client"));
var server = __importStar(require("./js/server"));
var proxyClient = __importStar(require("./js/proxy-client"));
var proxyServer = __importStar(require("./js/proxy-server"));
var client_json_1 = __importDefault(require("./idmap/client.json"));
var server_json_1 = __importDefault(require("./idmap/server.json"));
var client_byname_json_1 = __importDefault(require("./idmap/client-byname.json"));
var server_byname_json_1 = __importDefault(require("./idmap/server-byname.json"));
var proxy_client_json_1 = __importDefault(require("./idmap/proxy-client.json"));
var proxy_server_json_1 = __importDefault(require("./idmap/proxy-server.json"));
var proxy_client_byname_json_1 = __importDefault(require("./idmap/proxy-client-byname.json"));
var proxy_server_byname_json_1 = __importDefault(require("./idmap/proxy-server-byname.json"));
var const_json_1 = require("./const.json");
__createBinding(exports, const_json_1, "protocolVersion");
__createBinding(exports, const_json_1, "protocolVersionRevision");
__createBinding(exports, const_json_1, "proxyVersion");
__createBinding(exports, const_json_1, "proxyVersionRevision");
client_json_1["default"].forEach(function (x, i) { return (client_byname_json_1["default"][x] = i); });
server_json_1["default"].forEach(function (x, i) { return (server_byname_json_1["default"][x] = i); });
proxy_client_json_1["default"].forEach(function (x, i) { return (proxy_client_byname_json_1["default"][x] = i); });
proxy_server_json_1["default"].forEach(function (x, i) { return (proxy_server_byname_json_1["default"][x] = i); });
function parseToObject(pType, data) {
    var type = '';
    var packet;
    switch (pType) {
        case 'server':
            type = server_json_1["default"][data[0]];
            packet = server[type];
            break;
        case 'client':
            type = client_json_1["default"][data[0]];
            packet = client[type];
            break;
        case 'proxy-server':
            type = proxy_server_json_1["default"][data[0]];
            packet = proxyServer[type];
            break;
        case 'proxy-client':
            type = proxy_client_json_1["default"][data[0]];
            packet = proxyClient[type];
            break;
        default:
            return null;
    }
    if (type == undefined)
        return null;
    var rawData = data.slice(1);
    var message = packet.decode(rawData);
    var error = null;
    if (packet != undefined)
        error = packet.verify(message);
    else
        error = 'Invalid packet';
    if (error) {
        console.error('Invalid ' + pType + ' packet! Type: ' + type, error);
        return null;
    }
    return { data: packet.toObject(message, { defaults: true }), type: type };
}
exports.parseToObject = parseToObject;
function parseToMessage(pType, type, data) {
    var packet;
    var typeRaw = 0;
    switch (pType) {
        case 'server':
            typeRaw = server_byname_json_1["default"][type];
            packet = server[type];
            break;
        case 'client':
            typeRaw = client_byname_json_1["default"][type];
            packet = client[type];
            break;
        case 'proxy-server':
            typeRaw = proxy_server_byname_json_1["default"][type];
            packet = proxyServer[type];
            break;
        case 'proxy-client':
            typeRaw = proxy_client_byname_json_1["default"][type];
            packet = proxyClient[type];
            break;
        default:
            return null;
    }
    var error = null;
    if (packet != undefined)
        error = packet.verify(data);
    else
        error = 'Invalid packet';
    if (error) {
        console.error('Invalid ' + pType + ' packet! Type: ' + type, data, error);
        return null;
    }
    var message = packet.create(data);
    var encoded = packet.encode(message).finish();
    var out = new Uint8Array(1 + encoded.length);
    out.set([typeRaw]);
    out.set(encoded, 1);
    return out.buffer;
}
exports.parseToMessage = parseToMessage;
