/* eslint-env mocha */
const LRUCache = require('../../src').datastructures.LRUCache;
const assert = require('assert');

describe('assert LRUCache', () => {
  let store;
  it('initialized size to be 1, capacity to be 3, store.a should be 1', ()=>{
    store = new LRUCache(3, {a: 1});
    assert.equal(store.size, 1, 'store.size');
    assert.equal(store.capacity, 3, 'store.capacity');
    assert.equal(store.a, 1);
  });
  it('store.cache(\'b\', 2), expect store[\'b\'] to be 2', () => {
    assert.equal(store.cache('b', 2)['b'], 2);
  });
  it('set store.a = 5, expect store.a to be 5', () => {
    store.a = 5;
    assert.equal(store.a, 5);
  });
  it('store.b to be undefined, store.c to be 3, store.d to be 4, store.a to be 5, store.d to be 4 store.size to be 3', () => {
    store.cache('c', 3).cache('d', 4);
    assert.equal(store.b, undefined, 'store.b');
    assert.equal(store.c, 3, 'store.c');
    assert.equal(store.a, 5, 'store.a');
    assert.equal(store.d, 4, 'store.d');
    assert.equal(store.size, 3, 'store.size');
  });
  it('store.delete(\'delete\', expect return to be false)', () => {
    assert.equal(store.delete('delete'), false);
  });
  it('store.delete(\'d\'), expect return to be true, store.d to be undefined', () => {
    assert.equal(store.delete('d'), true);
    assert.equal(store.d, undefined, 'store.d');
  });
  it('store.delete(\'e\'), expect return to be true, store.size to be 2', () => {
    assert.equal(store.delete('e'), true, "store.delete('e')");
    assert.equal(store.size, 2, 'store.size');
  });
  it('store.c should be 4', () => {
    store.cache('c', 4);
    assert.equal(store.c, 4);
  });
  it('store.c should be 4', () => {
    store.cache('c', 4);
    assert.equal(store.c, 4);
  });
  it('store.length should be 1', () => {
    store.capacity = 1;
    assert.equal(Object.keys(store).length, 1);
  });
  it('store.length should be 1, store[0] should be "c"', () => {
    assert.equal(Object.keys(store).length, 1);
  });
  it('store[0] should be "c"', () => {
    assert.equal(Object.keys(store)[0], 'c');
  });
});
