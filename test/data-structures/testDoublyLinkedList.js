/* eslint-env mocha */
const DoublyLinkedList = require('../../src').DataStructures.DoublyLinkedList;
const assert = require('assert');

describe('DoublyLinkedList', () => {
  it('should be empty when initialized', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());
    assert.equal(inst.length, 0);
  });
});
