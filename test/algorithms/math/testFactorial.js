const assert = require('assert');

const factorial = require('../../../src/algorithms/math/factorial');

describe('factorial', () => {
  it('should return the factorial product of the given number', () => {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(7), 5040);
    assert.equal(factorial(15), 1307674368000);
    assert.equal(factorial(20), 2432902008176640000);
  });
});
