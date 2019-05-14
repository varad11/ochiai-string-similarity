"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCoefficient(_string1, _string2) {
    try {
        var _shortString = void 0;
        var _longString = void 0;
        var _intersection = 0;
        var _coefficient = void 0;
        if ((_string1 && _string2) && ((typeof _string1 === 'string') && (typeof _string2 === 'string'))) {
            _string1 = _string1.toLowerCase();
            _string2 = _string2.toLowerCase();
            _string1 = _string1.replace(/[^a-z0-9]/g, "");
            _string2 = _string2.replace(/[^a-z0-9]/g, "");
            if (_string1.length < _string2.length) {
                _shortString = _string1;
                _longString = _string2;
            }
            else {
                _shortString = _string2;
                _longString = _string1;
            }
            for (var i = 0; i < _shortString.length; i++) {
                if (_longString.includes(_shortString[i])) {
                    _intersection++;
                }
            }
            _coefficient = _intersection / (Math.sqrt(_longString.length * _shortString.length));
            return _coefficient;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return error;
    }
}
exports.getCoefficient = getCoefficient;
