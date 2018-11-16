
const fastPrime = require('../../../src').algorithms.math.fastPrime;

const assert = require('assert');

describe('Fast Prime Number checking', () => {
  it('should check if number less than 2', () => {
    assert.equal(fastPrime(1), false);
    assert.equal(fastPrime(0), false);
  });

  it('should solve for positive greater than 2', () => {
    assert.equal(fastPrime(11), true);
    assert.equal(fastPrime(43), true);
    assert.equal(fastPrime(71), true);
    assert.equal(fastPrime(103), true);
    assert.equal(fastPrime(200), false);
    assert.equal(fastPrime(512), false);
    assert.equal(fastPrime(953), true);
  });

  it('should solve for big numbers  ', () => {
    assert.equal(fastPrime(999917), true);
    assert.equal(fastPrime(1000000), false);
    assert.equal(fastPrime(9999973), true);
    assert.equal(fastPrime(10000000), false);
  });
});
