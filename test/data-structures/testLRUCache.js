/* eslint-env mocha */
const LRUCache = require('../../src').datastructures.LRUCache;
const assert = require('assert');

describe('LRU Cache', () => {
  it('should be empty when initialized', () => {
    const cache = new LRUCache(1);
    assert.equal(cache.size, 0);
  });

  it('should increase in size when an item is inserted', () => {
    const cache = new LRUCache(1);
    assert.equal(cache.size, 0);
    cache.insert('a', 'oboe');
    assert.equal(cache.size, 1);
  });

  it('should store items inserted in key-value pairs accessible by key', () => {
    const cache = new LRUCache(1);
    cache.insert('a', 'oboe');
    assert.equal(cache.get('a'), 'oboe');
  });

  it('should drop the least recently used item if the inserted item puts the cache over capacity', () => {
    const cache = new LRUCache(1);
    cache.insert('a', 'oboe');
    cache.insert('b', 'clarinet');
    assert.equal(cache.get('a'), undefined);
  });

  it('should not insert objects whose size exceeds the cache maximum', () => {
    const cache = new LRUCache(0);
    cache.insert('a', 'oboe');
    assert.equal(cache.get('a'), undefined);
  });

  it('should overwrite key/value pairs whose key is already in the cache (no duplicate keys)', () => {
    const cache = new LRUCache(2);
    cache.insert('a', 'oboe');
    cache.insert('a', 'trumpet');
    assert.equal(cache.get('a'), 'trumpet');
  });

  it('should return undefined when attempting to access a key which is not within the cache', () => {
    const cache = new LRUCache(2);
    assert.equal(cache.get('b'), undefined);
  });

  it('should drop as many items as necessary (in order of LRU) to fit the item being inserted', () => {
    const cache = new LRUCache(5, i => i.length);
    cache.insert('1', 'ab');
    cache.insert('2', 'cd');
    cache.insert('3', 'efghi');
    assert.equal(cache.get('1'), undefined);
    assert.equal(cache.get('2'), undefined);
    assert.equal(cache.get('3'), 'efghi');
  });

  it('should consider keys as strings to avoid type confusion (to be consistent with JS object key equality)', () => {
    const cache = new LRUCache(5, i => i.length);
    cache.insert('1', 'ab');
    cache.insert(1, 'cd');
    assert.equal(cache.get('1'), 'cd');
    assert.equal(cache.get(1), 'cd');
  });
});
