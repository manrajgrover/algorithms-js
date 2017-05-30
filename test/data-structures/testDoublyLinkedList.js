/* eslint-env mocha */
const DoublyLinkedList = require('../../src').datastructures.DoublyLinkedList;
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
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(2), inst.tail);
  });

  it('should get node at given index', () => {
    const inst = new DoublyLinkedList();

    inst.push(1);
    inst.push(2);

    const node = inst.getNode(2);
    assert.equal(node.value, 1);

    assert.equal(inst.toString(), '2 -> 1 -> null');
  });

  it('should insert node after a given node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.insertAfter(inst.getNode(1), 3);

    assert.equal(inst.toString(), '2 -> 3 -> 1 -> null');
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(3), inst.tail);
  });

  it('should insert node after last node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.insertAfter(inst.getNode(2), 3);

    assert.equal(inst.toString(), '2 -> 1 -> 3 -> null');
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(3), inst.tail);
  });

  it('should insert node before a given node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.insertBefore(inst.getNode(2), 3);

    assert.equal(inst.toString(), '2 -> 3 -> 1 -> null');
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(3), inst.tail);
  });

  it('should insert node before first node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.insertBefore(inst.getNode(1), 3);

    assert.equal(inst.toString(), '3 -> 2 -> 1 -> null');
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(3), inst.tail);
  });

  it('should throw error on insert after in list with no node or null', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    assert.throws(() => inst.insertAfter(inst.getNode(1)), Error);
    assert.throws(() => inst.insertAfter(null), Error);
  });

  it('should throw error on insert before in list with no node or null', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    assert.throws(() => inst.insertBefore(inst.getNode(1)), Error);
    assert.throws(() => inst.insertBefore(null), Error);
  });

  it('should throw error on popping from empty list', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    assert.throws(() => inst.pop(), Error);
  });


  it('should pop node from head', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.push(3);

    assert.equal(inst.toString(), '3 -> 2 -> 1 -> null');
    inst.pop();
    assert.equal(inst.toString(), '2 -> 1 -> null');
    assert.equal(inst.length, 2);
    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(2), inst.tail);
  });

  it('should delete nodes', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.push(3);
    inst.push(4);
    inst.push(5);
    inst.push(6);
    inst.push(7);
    inst.push(8);

    inst.deleteNode(inst.getNode(6));
    assert.equal(
      inst.toString(),
      '8 -> 7 -> 6 -> 5 -> 4 -> 2 -> 1 -> null'
    );

    inst.deleteNode(inst.getNode(1));
    assert.equal(
      inst.toString(),
      '7 -> 6 -> 5 -> 4 -> 2 -> 1 -> null'
    );

    inst.deleteNode(inst.getNode(3));
    assert.equal(
      inst.toString(),
      '7 -> 6 -> 4 -> 2 -> 1 -> null'
    );

    assert.deepStrictEqual(inst.getNode(1), inst.head);
    assert.deepStrictEqual(inst.getNode(5), inst.tail);
    assert.equal(inst.length, 5);
  });

  it('should delete tail node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.push(3);

    assert.equal(inst.toString(), '3 -> 2 -> 1 -> null');
    inst.deleteNode(inst.getNode(3));
    assert.equal(inst.tail.value, 2);
    assert.equal(inst.length, 2);
  });

  it('should throw error on deletion of undefined node', () => {
    const inst = new DoublyLinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    inst.push(2);
    inst.push(3);

    assert.throws(() => inst.deleteNode(), Error);
  });
});
