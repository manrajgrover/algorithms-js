/* eslint-env mocha */
const Queue = require('../../src').DataStructures.Queue;
const assert = require('assert');

describe('Queue', () => {
  it('should be empty when initialized', () => {
    const inst = new Queue();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should push a node', () => {
    const inst = new Queue();

    inst.push(10);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 1);
  });

  it('should check front and back value', () => {
    const inst = new Queue();

    inst.push(10);
    inst.push(20);
    inst.push(30);
    inst.push(40);
    inst.push(50);
    assert(!inst.isEmpty());

    assert.equal(inst.size, 5);
    assert.equal(inst.front(), 10);
    assert.equal(inst.back(), 50);
  });

  it('should pop node', () => {
    const inst = new Queue();

    inst.push(10);
    inst.push(20);
    inst.push(30);
    inst.push(40);
    inst.push(50);

    let poppedNodeVal = inst.pop();
    assert.equal(poppedNodeVal, 10);
    assert.equal(inst.front(), 20);
    assert.equal(inst.size, 4);

    inst.pop();
    inst.pop();
    poppedNodeVal = inst.pop();

    assert.equal(poppedNodeVal, 40);
    assert.equal(inst.front(), 50);
    assert.equal(inst.back(), 50);
    assert.equal(inst.size, 1);

    inst.pop();

    assert.throws(() => inst.pop(), Error);
  });

  it('should throw error on popping from empty Queue', () => {
    const inst = new Queue();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    assert.throws(() => inst.pop(), Error);
  });
});
