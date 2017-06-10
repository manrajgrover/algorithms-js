/* eslint-env mocha */
const Trie = require('../../src').datastructures.Trie;
const assert = require('assert');

describe('Trie', () => {
  it('should be empty when initializing a Trie', () => {
    const inst = new Trie();

    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should insert words in Trie', () => {
    const inst = new Trie();

    inst.insert('cool');
    inst.insert('the');
    inst.insert('their');
    inst.insert('them');

    assert(!inst.isEmpty());
    assert.equal(inst.size, 4);
  });

});
