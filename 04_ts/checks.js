"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var assert_1 = require("assert");
var testStrings = ['#a, #b', '#a##b', ''];
var expected = [['a', 'b'], ['a'], []];
for (var i = 0; i < testStrings.length; i++) {
    assert_1.strict.deepEqual((0, index_1.getHashTags)(testStrings[i]), expected[i], 'Строка ' + testStrings[i] +
        ' должна содержать хэштеги ' + expected[i]);
}
console.info('OK!');
//# sourceMappingURL=checks.js.map