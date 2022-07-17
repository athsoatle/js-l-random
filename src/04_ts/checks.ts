
import { getHashTags } from './index';
import { strict as assert } from 'assert';

const testStrings: string[] = ['#a, #b', '#a##b', ''];
const expected: Array<Array<string>> = [['a', 'b'], ['a'], []];

for (let i = 0; i < testStrings.length; i++) {
    assert.deepEqual(
        getHashTags(testStrings[i]),
        expected[i],
        'Строка ' + testStrings[i] +
        ' должна содержать хэштеги ' + expected[i]
    );
}

console.info('OK!');
