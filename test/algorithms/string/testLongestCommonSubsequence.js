/* eslint-env mocha */
const longestCommonSubsequence = require('../../../src').algorithms.string.longestCommonSubsequence;
const assert = require('assert');

describe('Longest Common Subsequence', () => {
  it('should return 4 for two strings', () => {
    const stringA = 'AGGTAB';
    const stringB = 'GXTXAYB';

    const length = longestCommonSubsequence(stringA, stringB);
    assert.equal(length, 4);
  });

  it('should return 0 when B is empty', () => {
    const stringA = 'sunday';
    const stringB = '';

    const length = longestCommonSubsequence(stringA, stringB);
    assert.equal(length, 0);
  });

  it('should return 0 when A is empty', () => {
    const stringA = '';
    const stringB = 'saturday';

    const length = longestCommonSubsequence(stringA, stringB);
    assert.equal(length, 0);
  });

  it('should return 0 when no params are provided', () => {
    const length = longestCommonSubsequence();
    assert.equal(length, 0);
  });
});
