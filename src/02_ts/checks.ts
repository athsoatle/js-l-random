
import {isValidTime} from './index';
import { strict as assert } from 'assert';

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');

console.info('OK!');