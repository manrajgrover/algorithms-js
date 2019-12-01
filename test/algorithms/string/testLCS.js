const lcs = require('../../../src').algorithms.string.lcs;
const assert = require('assert');

describe('Longest Common', () => {
  it('should find longest common substring', () => {
    const stringA = 'testyyyfoo';
    const stringB = 'bazzyyfoobaazz';

    const distance = lcs(stringA, stringB);
    assert.equal(distance, "yyfoo");
  });
});
