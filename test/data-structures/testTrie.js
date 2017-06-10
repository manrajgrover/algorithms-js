/* eslint-env mocha */
const Trie = require('../../src').datastructures.Trie;
const assert = require('assert');

describe('Trie', () => {
  it('should be empty when initializing a Trie', () => {
    const inst = new Trie();

    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });
});
