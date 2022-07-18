"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.emitter = void 0;
var emitter = function () {
};
exports.emitter = emitter;
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.eventMap = new Map();
    }
    Emitter.prototype.on = function (event, subscriber, handler) {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(event, new Map([[subscriber, new Array()]]));
        }
        var subMap = this.eventMap.get(event);
        if (!(subMap === null || subMap === void 0 ? void 0 : subMap.has(subscriber)))
            subMap === null || subMap === void 0 ? void 0 : subMap.set(subscriber, []);
        subMap === null || subMap === void 0 ? void 0 : subMap.set(subscriber, __spreadArray(__spreadArray([], subMap.get(subscriber), true), [handler.bind(subscriber)], false));
        return this;
    };
    Emitter.prototype.off = function (event, subscriber) {
        var _a, _b;
        if (this.eventMap.has(event) && ((_a = this.eventMap.get(event)) === null || _a === void 0 ? void 0 : _a.has(subscriber))) {
            (_b = this.eventMap.get(event)) === null || _b === void 0 ? void 0 : _b["delete"](subscriber);
        }
        return this;
    };
    Emitter.prototype.emit = function (event) {
        if (this.eventMap.has(event)) {
            __spreadArray([], this.eventMap.get(event).values(), true).forEach(function (v) { return v.forEach(function (v2) { return v2(); }); });
        }
        return this;
    };
    return Emitter;
}());
