"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.phoneBookHandler = void 0;
var add = 'ADD';
var remove = 'REMOVE_PHONE';
var show = 'SHOW';
var phoneBook = new Map;
var phoneBookHandler = function (command) {
    var tokens = command.split(' ');
    switch (tokens[0]) {
        case (add):
            handleAdd(tokens[1], tokens[2].split(','));
            break;
        case (remove):
            return handleRemove(tokens[1]);
        case (show):
            return handleShow();
        default:
            throw new Error('Wrong command');
    }
};
exports.phoneBookHandler = phoneBookHandler;
function handleAdd(name, phones) {
    if (phoneBook.has(name)) {
        phones.forEach(function (ph) { return phoneBook.get(name).push(ph); });
    }
    else {
        phoneBook.set(name, phones);
    }
}
function handleRemove(phone) {
    var flg = false;
    Array.from(phoneBook.values()).some(function (v) {
        if (v.indexOf(phone) !== -1) {
            v.slice(v.indexOf(phone), 1);
            flg = true;
            return true;
        }
    });
    return flg;
}
function handleShow() {
    var res = [];
    phoneBook.forEach(function (v, k) {
        res.push(k + ': ' + v.join(', '));
    });
    phoneBook = new Map(__spreadArray([], phoneBook.entries(), true).sort(function (l, r) {
        if (l[0] < r[0])
            return 1;
    }));
    return res;
}
