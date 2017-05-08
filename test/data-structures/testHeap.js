/* eslint-env mocha */
const Heap = require('../../src').DataStructures.Heap;
const assert = require('assert');

describe('Heap', () => {
  it('should be empty when initialized', () => {
    const inst = new Heap();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });
});
