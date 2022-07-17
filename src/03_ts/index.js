"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTime = void 0;
let addTime = function (hours, minutes, interval) {
    minutes += interval;
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    return formatTime(hours, minutes);
};
exports.addTime = addTime;
function formatTime(hrs, mins) {
    const res = [hrs, mins].map((it) => (it + '').length == 1 ? '0' + it : it + '');
    return res.join(':');
}
//# sourceMappingURL=index.js.map