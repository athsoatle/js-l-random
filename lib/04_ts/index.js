"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashTags = void 0;
let getHashTags = function (str) {
    return str.match(/(^|\s)(#[a-z\d-]+)/ig) == null
        ? []
        : str.match(/(^|\s)(#[a-z\d-]+)/ig).map((s) => s.trim().slice(1));
};
exports.getHashTags = getHashTags;
//# sourceMappingURL=index.js.map