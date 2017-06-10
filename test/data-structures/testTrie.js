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

  it('should search words in Trie', () => {
    const inst = new Trie();

    inst.insert('cool');
    inst.insert('the');
    inst.insert('their');
    inst.insert('them');

    assert(inst.search('the'));
    assert(inst.search('them'));
    assert(!inst.search('they'));

    assert(!inst.search('coo'));
    assert(inst.search('cool'));
  });

  it('should search with deleted words in Trie', () => {
    const inst = new Trie();

    inst.insert('cool');
    inst.insert('the');
    inst.insert('their');
    inst.insert('them');
    inst.insert('themselves');

    inst.delete('them');
    assert(!inst.search('them'));

    assert.equal(inst.size, 4);

    inst.delete('the');
    assert.equal(inst.size, 3);
    assert(!inst.search('the'));
    assert(inst.search('themselves'));

    inst.delete('themselves');
    assert.equal(inst.size, 2);
    assert(!inst.search('themselves'));
  });
});
