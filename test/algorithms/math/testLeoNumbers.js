/* eslint-env mocha */
const leoNumbers = require('../../../src/algorithms/math/leoNumbers');
const assert = require('assert');

describe('leoNumbers', () => {
  it('should return 1 if n is 0', () => {
    assert.deepStrictEqual(leoNumbers(0), [1]);
  });
  it('should return 1 if n is 1', () => {
    assert.deepStrictEqual(leoNumbers(1), [1]);
  });
  it('should return an error if n is negative', () => {
    assert.throws(() => leoNumbers(-1));
  });
  it('should return leonardo numbers up to 30', () => {
    assert.deepStrictEqual(leoNumbers(30), [1, 1, 3, 5, 9, 15, 25]);
  });
  it('should return leonardo numbers up to 500', () => {
    assert.deepStrictEqual(leoNumbers(500), [1, 1, 3, 5, 9, 15, 25, 41, 67, 109, 177, 287, 465]);
  });
});
