"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var assert_1 = require("assert");
assert_1.strict.equal((0, index_1.sum)(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert_1.strict.equal((0, index_1.sum)(101, 17), 118, 'При сложении 101 и 17 получится 118');
console.info('OK!');
//# sourceMappingURL=checks.js.map