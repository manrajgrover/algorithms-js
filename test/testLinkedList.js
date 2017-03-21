/* eslint-env mocha */
const LinkedList = require('../src').DataStructures.LinkedList;
const assert = require('assert');

describe('LinkedList', () => {
  it('should be empty when initialized', () => {
    const inst = new LinkedList();
    assert(inst.isEmpty());
    assert.equal(inst.length, 0);
  });
});
