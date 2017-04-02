/* eslint-env mocha */
const DoublyLinkedList = require('../../src').DataStructures.DoublyLinkedList;
const assert = require('assert');

describe('DoublyLinkedList', () => {
  it('should be empty when initialized', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());
    assert.equal(inst.length, 0);
  });

  it('should push node to the front', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    assert.equal(inst.length, 1);

    inst.push(2);
    assert.equal(inst.length, 2);

    assert.equal(inst.toString(), '2 -> 1 -> null');
  });
});
