"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
var normalize = function (tags) {
    return tags.map(function (s) { return s.toLowerCase; })
        .filter(function (val, index, self) { return self.indexOf(val) === index; })
        .join(',');
};
exports.normalize = normalize;
//# sourceMappingURL=index.js.map