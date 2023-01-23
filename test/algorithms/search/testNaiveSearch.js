/* eslint-env mocha */
const naivesearch = require('../../../src').algorithms.search.naivesearch;
const assert = require('assert');

describe('Naive Search', () => {
  it('should return frequency of the pattern', () => {
    const freq = naivesearch("akgjfjhuyutomatokajkhgsvkjrtomato", "tomato");

    assert.equal(freq, 1);
  });

  it('should return frequency of the pattern', () => {
    const freq = naivesearch("treeseebeetea", "ee");

    assert.equal(freq, 3);
  });

  it('should return frequency of the pattern', () => {
    const freq = naivesearch("applebottomjeans", "boots");

    assert.equal(freq, 0);
  });
});
