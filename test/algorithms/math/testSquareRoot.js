/* eslint-env mocha */
const squareRoot = require('../../../src/algorithms/math/square_root');

const assert = require('assert');

describe('Calculating Square Root using Newton\'s Method', () => {
  it('should return 0 if the number is 0', () => {
    assert.equal(squareRoot(0), 0);
  });

  it('should throw an error if the number is negative', () => {
    assert.throws(() => squareRoot(-3));
  });

  it('should return 1.414213562373095 when the given number is 2', () => {
    assert.equal(squareRoot(2), 1.414213562373095);
  });

  it('should return 11.090536506409418 when the given number is 123', () => {
    assert.equal(squareRoot(123), 11.090536506409418);
  });
});
