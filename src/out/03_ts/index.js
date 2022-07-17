"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTime = void 0;
var addTime = function (hours, minutes, interval) {
    minutes += interval;
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    return formatTime(hours, minutes);
};
exports.addTime = addTime;
function formatTime(hrs, mins) {
    var res = [hrs, mins].map(function (it) { return (it + '').length == 1 ? '0' + it : it + ''; });
    return res.join(':');
}
//# sourceMappingURL=index.js.map