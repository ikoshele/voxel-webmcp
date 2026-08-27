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
exports.__esModule = true;
var cli_1 = require("protobufjs/cli");
var fs = __importStar(require("fs"));
fs.readdir('proto', function (err, data) {
    data.forEach(function (x) {
        if (!x.endsWith('.proto'))
            return;
        console.log(x);
        cli_1.pbjs.main(['--target', 'static-module', "./proto/" + x], function (err, output) {
            if (err)
                throw err;
            var name = x.replace('.proto', '');
            fs.writeFileSync("./js/" + name + ".js", output);
            cli_1.pbts.main(["./js/" + name + ".js"], function (err, output) {
                if (err)
                    throw err;
                fs.writeFileSync("./js/" + name + ".d.ts", output);
            });
        });
        cli_1.pbjs.main(['--target', 'json', "./proto/" + x], function (err, output) {
            if (err)
                throw err;
            var name = x.replace('.proto', '');
            fs.writeFileSync("./json/" + name + ".json", output);
            var obj = JSON.parse(output);
            var keys = Object.keys(obj.nested);
            var byname = {};
            keys.forEach(function (v, i) { return byname[v] = i; });
            fs.writeFileSync("./idmap/" + name + ".json", JSON.stringify(keys));
            fs.writeFileSync("./idmap/" + name + "-byname.json", JSON.stringify(byname));
        });
    });
});
