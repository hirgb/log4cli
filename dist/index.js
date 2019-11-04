'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var chalk = _interopDefault(require('chalk'));

var Log = /** @class */ (function () {
    function Log() {
    }
    Log.error = function (str) {
        console.log(chalk.red.bold('[Error]: ') + str);
    };
    Log.info = function (str) {
        console.log(chalk.gray.bold('[Info]: ') + str);
    };
    Log.success = function (str) {
        console.log(chalk.green.bold('[Success]: ') + str);
    };
    Log.warn = function (str) {
        console.log(chalk.yellow.bold('[Warn]: ') + str);
    };
    return Log;
}());

module.exports = Log;
