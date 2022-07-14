
import { phoneBookHandler } from './index';
import { strict as assert } from 'assert';

// Добавляем телефоны контакту Ivan
phoneBookHandler('ADD Ivan 555-10-01,555-10-03');
phoneBookHandler('ADD Ivan 555-10-02');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBookHandler('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-03, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02" у вас' +  phoneBookHandler('SHOW')
);

// Проверка работы функции REMOVE_PHONE
assert.equal(
    // Удаляем телефон 555-10-03
    phoneBookHandler('REMOVE_PHONE 555-10-03'),
    true,
    'Телефон 555-10-03 успешно удален'
);
// Добавляем новый контакт
phoneBookHandler('ADD Alex 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBookHandler('SHOW'),
    [
        'Alex: 555-20-01',
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
);

// Удаляем телефон
phoneBookHandler('REMOVE_PHONE 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBookHandler('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);

console.info('OK!');
