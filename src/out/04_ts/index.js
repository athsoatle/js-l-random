"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHashTags = void 0;
var getHashTags = function (str) {
    console.info('FIRST', str.match(/(^|\s)(#[a-z\d-]+)/ig));
    console.info('SECOND', str.match(/(^|\s)(#[a-z\d-]+)/ig).map(function (s) {
        s.trim();
        s.slice(2);
        return s;
    }));
    console.info('THIRD', str.match(/(^|\s)(#[a-z\d-]+)/ig).map(function (s) {
        s.slice(1);
        return s;
    }));
    return str.match(/(^|\s)(#[a-z\d-]+)/ig).map(function (s) {
        s.trim();
        s.slice(1);
        return s;
    });
};
exports.getHashTags = getHashTags;
//# sourceMappingURL=index.js.map