const LCS = require('../../../src').algorithms.string.longestCommon;
const assert = require('assert');

describe('Longest Common', () => {
  it('should find longest common substring', () => {
    const stringA = 'testyyyfoo';
    const stringB = 'bazzyyfoobaazz';

    const distance = longestCommon(stringA, stringB);
    assert.equal(distance, "foo");
  });
});
