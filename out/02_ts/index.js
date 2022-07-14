"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTime = void 0;
var isValidTime = function (hours, minutes) {
    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59)
        return true;
    return false;
};
exports.isValidTime = isValidTime;
//# sourceMappingURL=index.js.map