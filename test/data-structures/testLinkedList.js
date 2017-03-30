/* eslint-env mocha */
const LinkedList = require('../../src').DataStructures.LinkedList;
const assert = require('assert');

describe('LinkedList', () => {
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
});
