var assert = require('assert');

var primeFactors = require('../../../src/algorithms/math/prime-factors');

describe('primeFactors', function() {
  it('should return all the prime factors of a given number', function () {
    assert.deepEqual(primeFactors(9),  [3] );
    assert.deepEqual(primeFactors(15),  [3, 5]);
    assert.deepEqual(primeFactors(21),  [3, 7]);
    assert.deepEqual(primeFactors(100),  [2,5]);
  })

  it('should return the number if num is prime', function () {
    assert.deepEqual(primeFactors(2),  [2]);
    assert.deepEqual(primeFactors(7),  [7]);
    assert.deepEqual(primeFactors(5),  [5]);
    assert.deepEqual(primeFactors(37),  [37]);

  })
})
