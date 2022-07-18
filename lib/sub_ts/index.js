"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitter = void 0;
class Emitter {
    constructor() {
        this.eventMap = new Map();
    }
    on(event, subscriber, handler) {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(event, new Map([[subscriber, new Array()]]));
        }
        let subMap = this.eventMap.get(event);
        if (!(subMap === null || subMap === void 0 ? void 0 : subMap.has(subscriber)))
            subMap === null || subMap === void 0 ? void 0 : subMap.set(subscriber, []);
        subMap === null || subMap === void 0 ? void 0 : subMap.set(subscriber, [...subMap.get(subscriber), handler.bind(subscriber)]);
        return this;
    }
    off(event, subscriber) {
        var _a, _b;
        if (this.eventMap.has(event) && ((_a = this.eventMap.get(event)) === null || _a === void 0 ? void 0 : _a.has(subscriber))) {
            (_b = this.eventMap.get(event)) === null || _b === void 0 ? void 0 : _b.delete(subscriber);
        }
        return this;
    }
    emit(event) {
        if (this.eventMap.has(event)) {
            [...this.eventMap.get(event).values()].forEach((v) => v.forEach((v2) => v2()));
        }
        return this;
    }
}
exports.emitter = new Emitter();
//# sourceMappingURL=index.js.map