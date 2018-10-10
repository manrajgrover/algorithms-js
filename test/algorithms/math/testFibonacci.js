const fibonacci = require('../../../src/algorithms/math/fibonacci');

const assert = require('assert');

describe('Fibonacci', () => {
    it('it should return 0 if given number is 0', () => {
        assert.deepStrictEqual(fibonacci(0), '0');
    });

    it('should return message if given number is negative', () => {
        assert.deepStrictEqual(fibonacci(-5), 'Plz provide positive number');
    });

    it('should return fibonacci sequence up to 10', () => {
        assert.deepStrictEqual(fibonacci(10), '0 1 1 2 3 5 8');
    });

    it('should return fibonacci sequence up to 100', () => {
        assert.deepStrictEqual(fibonacci(100), '0 1 1 2 3 5 8 13 21 34 55 89');
    });
})