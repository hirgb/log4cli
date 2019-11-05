(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chalk"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var chalk_1 = require("chalk");
    var Log = (function () {
        function Log() {
        }
        Log.error = function (str) {
            console.log(chalk_1["default"].red.bold('[Error]: ') + str);
        };
        Log.info = function (str) {
            console.log(chalk_1["default"].gray.bold('[Info]: ') + str);
        };
        Log.success = function (str) {
            console.log(chalk_1["default"].green.bold('[Success]: ') + str);
        };
        Log.warn = function (str) {
            console.log(chalk_1["default"].yellow.bold('[Warn]: ') + str);
        };
        return Log;
    }());
    exports["default"] = Log;
});
//# sourceMappingURL=index.js.map