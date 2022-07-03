"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var assert_1 = require("assert");
assert_1.strict.equal((0, index_1.isValidTime)(12, 30), true, 'Время 12:30 валидное.');
assert_1.strict.equal((0, index_1.isValidTime)(12, 61), false, 'Время 12:61 невалидное');
console.info('OK!');
