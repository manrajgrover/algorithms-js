/* eslint-env mocha */
const longestcommonleadingsubstring = require('../../../src').algorithms.string.longestcommonleadingsubstring;
const assert = require('assert');

describe('Longest common leading substring', () => {
  it('should find bb for bbaaxyz and bb', () => {
    const stringA = 'bbaaxyz';
    const stringB = 'bb';

    const result = longestcommonleadingsubstring(stringA, stringB);
    assert.equal(result, 'bb');
  });

  it('should find abab for ababxyz and ababc', () => {
    const stringA = 'ababxyz';
    const stringB = 'ababc';

    const result = longestcommonleadingsubstring(stringA, stringB);
    assert.equal(result, 'abab');
  });

  it('should return empty string when one or both of inputs is empty', () => {
    const resultOne = longestcommonleadingsubstring('abcdef', '');
    assert.equal(resultOne, '');
    const resultTwo = longestcommonleadingsubstring('', 'abcasds');
    assert.equal(resultTwo, '');
    const resultThree = longestcommonleadingsubstring('', '');
    assert.equal(resultThree, '');
  });

  it('should find u for u and uahhfghfgdfhytyty', () => {
    const stringA = 'u';
    const stringB = 'uahhfghfgdfhytyty';

    const result = longestcommonleadingsubstring(stringA, stringB);
    assert.equal(result, 'u');
  });

  it('should find x for x and x', () => {
    const stringA = 'x';
    const stringB = 'x';

    const result = longestcommonleadingsubstring(stringA, stringB);
    assert.equal(result, 'x');
  });
});
