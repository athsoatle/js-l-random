"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const assert_1 = require("assert");
// Определим объект для счетчика нотификаций
var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};
// Определим для хранения логов
var logger = {
    logs: []
};
// Подписываемся на событие new_notification и сразу оповещаем всех подписчиков
index_1.emitter
    .on('new_notification', notifications, notifications.count)
    .on('new_notification', logger, function () {
    this.logs.push('Произошло новое событие new_notification');
})
    .on('new_notification', logger, function () {
    // this указывает на logger
    this.logs.push('Добавлена новая нотификация. Количество - ' + notifications.counter);
})
    .emit('new_notification');
// Проверяем количество нотификаций
assert_1.strict.equal(notifications.counter, 1, 'Получена одна нотификация');
// В логе сохранено событие
// Так как обработчик notifications.count отработал первым,
//  в логах сохранено правильное количество нотификаций
assert_1.strict.deepEqual(logger.logs, [
    'Произошло новое событие new_notification',
    'Добавлена новая нотификация. Количество - 1'
]);
// На время отключаем логгирование, а затем снова включаем
index_1.emitter
    .off('new_notification', logger)
    .emit('new_notification')
    .on('new_notification', logger, function () {
    this.logs.push('Новое событие new_notification!');
})
    .emit('new_notification');
// Проверяем количество нотификаций
assert_1.strict.equal(notifications.counter, 3, 'Получено три нотификации');
// Проверяем, что логи были отключены, а затем снова подключены
assert_1.strict.deepEqual(logger.logs, [
    'Произошло новое событие new_notification',
    'Добавлена новая нотификация. Количество - 1',
    'Новое событие new_notification!'
]);
console.info('OK!');
//# sourceMappingURL=checks.js.map