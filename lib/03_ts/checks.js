"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const assert_1 = require("assert");
assert_1.strict.equal((0, index_1.addTime)(12, 30, 30), '13:00', 'При добавлении 30 мин. к 12:30 получится 13:00');
assert_1.strict.equal((0, index_1.addTime)(23, 59, 31), '00:30', 'При добавлении 31 мин. к 23:59 получится 00:30');
assert_1.strict.equal((0, index_1.addTime)(11, 50, 61), '12:51', 'При добавлении 61 мин. к 11:50 получится 12:51');
assert_1.strict.equal((0, index_1.addTime)(23, 1, 80), '00:21', 'При добавлении 80 мин. к 23:01 получится 00:21');
assert_1.strict.equal((0, index_1.addTime)(23, 1, 132432462475), '18:56', 'При добавлении 132432462475 мин. к 23:01 получится 18:56');
console.info('OK!');
//# sourceMappingURL=checks.js.map