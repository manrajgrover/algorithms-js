/* eslint-env mocha */
const longestCommonSubstring = require('../../../src').algorithms.string.longestCommonSubstring;
const assert = require('assert');

describe('LongestCommonSubstring', () => {
  it('should return longest common substring', () => {
    assert.deepEqual(longestCommonSubstring('abcdef', 'fbcdea'), 'bcde');
    assert.deepEqual(longestCommonSubstring('abcdef', 'feabcd'), 'abcd');
    assert.deepEqual(longestCommonSubstring('abcdef', 'bcdfea'), 'bcd');
  });

  it('should return empty string if one or two of inputs are empty', () => {
    assert.deepEqual(longestCommonSubstring('abcdef', ''), '');
    assert.deepEqual(longestCommonSubstring('', 'abcdef'), '');
    assert.deepEqual(longestCommonSubstring('', ''), '');
  });

  it('should return first input string if strings are same', () => {
    assert.deepEqual(longestCommonSubstring('abc', 'abc'), 'abc');
  });
});
