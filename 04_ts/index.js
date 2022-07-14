"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashTags = void 0;
var getHashTags = function (str) {
    return str.match(/(^|\s)(#[a-z\d-]+)/ig) == null
        ? []
        : str.match(/(^|\s)(#[a-z\d-]+)/ig).map(function (s) {
            return s.trim().slice(1);
        });
};
exports.getHashTags = getHashTags;
//# sourceMappingURL=index.js.map