/* eslint-env mocha */
const LinkedList = require('../../src').datastructures.LinkedList;
const assert = require('assert');

describe('Linked List', () => {
  it('should be empty when initialized', () => {
    const inst = new LinkedList();
    assert(inst.isEmpty());
    assert.equal(inst.length, 0);
  });

  it('should have 1 node when pushed', () => {
    const inst = new LinkedList();
    assert(inst.isEmpty());

    inst.push(1);
    assert(!inst.isEmpty());
    assert.equal(inst.length, 1);
  });

  it('should have 1 node when pushed twice and popped once', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);
    inst.pop();
    assert(!inst.isEmpty());
    assert.equal(inst.length, 1);
  });

  it('should throw error on popping from empty list', () => {
    const inst = new LinkedList();
    assert(inst.isEmpty());
    assert.throws(() => inst.pop(), Error);
  });

  it('should pop using index', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);
    inst.popNodeByIndex(1);
    assert(!inst.isEmpty());
    assert.equal(inst.length, 1);
    const ref = inst.getNodeByIndex(0);
    assert.equal(ref.value, 2);
  });

  it('should return list in string format', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);
    const listString = inst.toString();
    assert.equal(listString, '2 -> 1 -> null');
  });

  it('should call function on all nodes', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);

    inst.forEach(value => 2 * value);
    const listString = inst.toString();
    assert.equal(listString, '4 -> 2 -> null');
  });


  it('should return list as array', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);
    const listArray = inst.getListAsArray();
    assert.equal(listArray[0], 2);
    assert.equal(listArray[1], 1);
  });


  it('should return first node that matches', () => {
    const inst = new LinkedList();

    inst.push({ t: 1 });
    inst.push({ x: 2 });
    const node = inst.getNodeByValue({ t: 1 });
    assert.deepStrictEqual(node.value, { t: 1 });
  });

  it('should return -1 if node not listed', () => {
    const inst = new LinkedList();

    inst.push({ t: 1 });
    inst.push({ x: 2 });
    const node = inst.getNodeByValue({ t: 2 });
    assert.deepStrictEqual(node, -1);
  });

  it('should return node at index', () => {
    const inst = new LinkedList();

    inst.push({ t: 1 });
    inst.push({ x: 2 });
    const node = inst.getNodeByIndex(1);
    assert.deepStrictEqual(node.value, { t: 1 });
  });

  it('should throw error if index out of bound while getting node', () => {
    const inst = new LinkedList();

    inst.push({ t: 1 });
    inst.push({ x: 2 });
    assert.throws(() => inst.getNodeByIndex(5), Error);
  });


  it('should throw error if index out of bound while popping', () => {
    const inst = new LinkedList();

    inst.push({ t: 1 });
    inst.push({ x: 2 });
    assert.throws(() => inst.popNodeByIndex(5), Error);
  });

  it('should reverse linked list', () => {
    const inst = new LinkedList();

    inst.push(1);
    inst.push(2);
    inst.push(3);

    assert.equal(inst.toString(), '3 -> 2 -> 1 -> null');

    inst.reverseList();
    assert.equal(inst.toString(), '1 -> 2 -> 3 -> null');
  });

  it('should reverse 1 node linked list', () => {
    const inst = new LinkedList();

    inst.push(1);

    assert.equal(inst.toString(), '1 -> null');

    inst.reverseList();
    assert.equal(inst.toString(), '1 -> null');
  });
});
