"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
let normalize = function (tags) {
    return tags.map((s) => s.toLowerCase)
        .filter((val, index, self) => self.indexOf(val) === index)
        .join(',');
};
exports.normalize = normalize;
//# sourceMappingURL=index.js.map