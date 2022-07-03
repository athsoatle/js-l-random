import {sum} from './index';
import { strict as assert } from 'assert';

assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, 17), 118, 'При сложении 101 и 17 получится 118');

console.info('OK!');
