"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const assert_1 = require("assert");
assert_1.strict.equal((0, index_1.isValidTime)(12, 30), true, 'Время 12:30 валидное.');
assert_1.strict.equal((0, index_1.isValidTime)(12, 61), false, 'Время 12:61 невалидное');
console.info('OK!');
//# sourceMappingURL=checks.js.map