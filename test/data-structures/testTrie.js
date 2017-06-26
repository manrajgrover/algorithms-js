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

    inst.insert('cool', 1);
    inst.insert('the', 2);
    inst.insert('their', 3);
    inst.insert('them', 4);

    assert.equal(inst.search('the'), 2);
    assert.equal(inst.search('them'), 4);
    assert.equal(inst.search('they'), -1);

    assert.equal(inst.search('coo'), -1);
    assert.equal(inst.search('cool'), 1);
  });

  it('should search with deleted words in Trie', () => {
    const inst = new Trie();

    inst.insert('cool', 1);
    inst.insert('the', 2);
    inst.insert('their', 3);
    inst.insert('them', 4);
    inst.insert('themselves', 5);

    inst.delete('them');
    assert.equal(inst.search('them'), -1);

    assert.equal(inst.size, 4);

    inst.delete('the');
    assert.equal(inst.size, 3);
    assert.equal(inst.search('the'), -1);
    assert.equal(inst.search('themselves'), 5);

    inst.delete('themselves');
    assert.equal(inst.size, 2);
    assert.equal(inst.search('themselves'), -1);
  });

  it('should try deleting deleted word', () => {
    const inst = new Trie();

    inst.insert('cool', 1);
    inst.insert('the', 2);
    inst.insert('their', 3);
    inst.insert('them', 4);
    inst.insert('themselves', 5);

    inst.delete('them');
    assert.equal(inst.search('them'), -1);

    assert.equal(inst.size, 4);

    assert(!inst.delete('them'));
    assert.equal(inst.size, 4);
    assert.equal(inst.search('them'), -1);
  });
});
