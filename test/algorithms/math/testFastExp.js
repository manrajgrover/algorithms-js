/* eslint-env mocha */
const fastexp = require('../../../src').algorithms.math.fastexp;

const assert = require('assert');

describe('Fast Exponentiation', () => {
  it('should check for both numbers as 0', () => {
    assert.equal(fastexp(0, 10), 0);
    assert.equal(fastexp(10, 0), 1);
    assert.equal(fastexp(0, 0), undefined);
  });

  it('should solve for positive powers', () => {
    assert.equal(fastexp(10, 2), 100);
    assert.equal(fastexp(10, 3), 1000);
    assert.equal(fastexp(10, 7), 10000000);
  });
});
