/* eslint-env mocha */
const longestcommonsubstring = require('../../../src').algorithms.string.longestcommonsubstring;
const assert = require('assert');

describe('Longest Common Substing', () => {
  it('find the longest common substring when a.length > b.length', () => {
    const stringA = 'ABCDFGHI';
    const stringB = 'ABDFGH';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, 'DFGH');
  });
  it('find the longest common substring when a.length < b.length', () => {
    const stringA = 'ABDFGH';
    const stringB = 'ABCDFGHI';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, 'DFGH');
  });
  it('find the longest common substring when a.length = b.length', () => {
    const stringA = 'ACDEFHI';
    const stringB = 'ABCEFHJ';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, 'EFH');
  });
  it('return empty string when there is no common substring', () => {
    const stringA = 'ACEGIKM';
    const stringB = 'BDFHJLN';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, '');
  });
  it('return empty string when a is an empty string', () => {
    const stringA = '';
    const stringB = 'ABCDEFGHI';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, '');
  });
  it('return empty string when b is an empty string', () => {
    const stringA = 'ABCDEFGHI';
    const stringB = '';

    const substring = longestcommonsubstring(stringA, stringB);
    assert.equal(substring, '');
  });
});
