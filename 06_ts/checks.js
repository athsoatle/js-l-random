"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var assert_1 = require("assert");
// Добавляем телефоны контакту Ivan
(0, index_1.phoneBookHandler)('ADD Ivan 555-10-01,555-10-03');
(0, index_1.phoneBookHandler)('ADD Ivan 555-10-02');
// Проверка работы функции SHOW
assert_1.strict.deepEqual(
// Получаем содержимое телефонной книги
(0, index_1.phoneBookHandler)('SHOW'), [
    'Ivan: 555-10-01, 555-10-03, 555-10-02'
], 'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02" у вас' + (0, index_1.phoneBookHandler)('SHOW'));
// Проверка работы функции REMOVE_PHONE
assert_1.strict.equal(
// Удаляем телефон 555-10-03
(0, index_1.phoneBookHandler)('REMOVE_PHONE 555-10-03'), true, 'Телефон 555-10-03 успешно удален');
// Добавляем новый контакт
(0, index_1.phoneBookHandler)('ADD Alex 555-20-01');
// Проверка работы функции SHOW
assert_1.strict.deepEqual(
// Получаем содержимое телефонной книги
(0, index_1.phoneBookHandler)('SHOW'), [
    'Alex: 555-20-01',
    'Ivan: 555-10-01, 555-10-02'
], 'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"');
// Удаляем телефон
(0, index_1.phoneBookHandler)('REMOVE_PHONE 555-20-01');
// Проверка работы функции SHOW
assert_1.strict.deepEqual(
// Получаем содержимое телефонной книги
(0, index_1.phoneBookHandler)('SHOW'), [
    'Ivan: 555-10-01, 555-10-02'
], 'В телефонной книге: "Ivan: 555-10-01, 555-10-02"');
console.info('OK!');
//# sourceMappingURL=checks.js.map