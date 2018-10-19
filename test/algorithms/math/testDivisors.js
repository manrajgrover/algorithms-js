/* eslint-env mocha */
const divisors= require('../../../src').algorithms.math.divisors;

const assert = require('assert');

describe('Divisors', () => {
  it('should return 0 if the input is 0', () => {
    assert.deepEqual(divisors(0),[0]);
  });

  it('should return positive number array for 1 and positive numbers >= 1', () => {
    assert.deepEqual(divisors(100),[ 1, 2, 4, 5, 10, 20, 25, 50, 100 ]);
    assert.deepEqual(divisors(52),[ 1, 2, 4, 13, 26, 52 ]);
  });

  
});
