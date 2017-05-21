/* eslint-env mocha */
const FenwickTree = require('../../src').DataStructures.FenwickTree;
const assert = require('assert');

describe('Fenwick Tree', () => {
  it('should be empty when initialized', () => {
    const inst = new FenwickTree([]);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });
});
