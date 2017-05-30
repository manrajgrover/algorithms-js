/* eslint-env mocha */
const Heap = require('../../src').datastructures.Heap;
const assert = require('assert');

describe('Heap', () => {
  it('should be empty when initialized', () => {
    const inst = new Heap();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should test default compare function', () => {
    const inst = new Heap();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    inst.push(10);
    inst.push(5);

    assert.equal(inst.top(), 5);
    assert.equal(inst.size, 2);
  });

  it('should insert values into heap', () => {
    const inst = new Heap(undefined, (a, b) => a < b);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    inst.push(5);
    inst.push(20);
    inst.push(30);
    inst.push(10);

    assert.equal(inst.top(), 5);
    assert.equal(inst.size, 4);
  });

  it('should pop values from heap', () => {
    const inst = new Heap(undefined, (a, b) => a < b);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    inst.push(5);
    inst.push(30);
    inst.push(10);
    inst.push(20);
    inst.push(100);

    assert.equal(inst.top(), 5);
    assert.equal(inst.size, 5);

    inst.pop();
    inst.pop();
    assert.equal(inst.top(), 20);
    assert.equal(inst.size, 3);

    inst.pop();
    inst.pop();
    assert.equal(inst.top(), 100);
    assert.equal(inst.size, 1);

    inst.pop();
    assert.equal(inst.top(), null);
    assert.throws(() => inst.pop(), Error);

    inst.push(10);
    assert.equal(inst.top(), 10);
    assert.equal(inst.size, 1);
  });

  it('should test for max heap', () => {
    const inst = new Heap(undefined, (a, b) => a > b);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    inst.push(5);
    inst.push(30);
    inst.push(10);
    inst.push(20);
    inst.push(100);

    assert.equal(inst.top(), 100);
    assert.equal(inst.size, 5);

    inst.pop();
    inst.pop();
    assert.equal(inst.top(), 20);
    assert.equal(inst.size, 3);

    inst.pop();
    assert.equal(inst.top(), 10);
    assert.equal(inst.size, 2);
    inst.pop();
    inst.pop();
    assert.throws(() => inst.pop(), Error);
  });

  it('should test for array heapify', () => {
    const inst = new Heap([5, 30, 10, 20, 100], (a, b) => a > b);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 5);

    assert.equal(inst.top(), 100);
    assert.equal(inst.size, 5);

    inst.pop();
    inst.pop();
    assert.equal(inst.top(), 20);
    assert.equal(inst.size, 3);

    inst.pop();
    assert.equal(inst.top(), 10);
    assert.equal(inst.size, 2);
    inst.pop();
    inst.pop();
    assert.throws(() => inst.pop(), Error);
  });
});
