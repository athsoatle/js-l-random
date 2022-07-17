"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const assert_1 = require("assert");
const testStrings = ['#a, #b', '#a##b', ''];
const expected = [['a', 'b'], ['a'], []];
for (let i = 0; i < testStrings.length; i++) {
    assert_1.strict.deepEqual((0, index_1.getHashTags)(testStrings[i]), expected[i], 'Строка ' + testStrings[i] +
        ' должна содержать хэштеги ' + expected[i]);
}
console.info('OK!');
//# sourceMappingURL=checks.js.map