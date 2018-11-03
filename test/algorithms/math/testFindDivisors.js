/* eslint-env mocha */
const findDivisors = require('../../../src').algorithms.math.findDivisors;

const assert = require('assert');

describe.only('Find divisors', () => {
    it('should return array of  if number is divisors', () => {
        assert.deepEqual(findDivisors(10), [1, 2, 5, 10]);
        assert.deepEqual(findDivisors(100), [1, 2, 4, 5, 10, 20, 25, 50, 100]);
        assert.deepEqual(findDivisors(125), [1, 5, 25, 125]);
    });

    it('should return empty array if number = 0', () => {
        assert.deepEqual(findDivisors(0), []);
    });

    it('should return array of 1 array if number = 1', () => {
        assert.deepEqual(findDivisors(0), []);
    });
});
