/* eslint-env mocha */
const longestcommonsubstring = require('../../../src').algorithms.string.longestcommonsubstring;
const assert = require('assert');

describe('Longest Common Substring', () => {
  it('should find abcd for xyzabcd and abcdxyz', () => {
    const stringA = 'xyzabcd';
    const stringB = 'abcdxyz';

    const result = longestcommonsubstring(stringA, stringB);
    assert.equal(result, 'abcd');
  });

  it('should find Geeks for GeeksforGeeks and GeeksQuiz', () => {
    const stringA = 'GeeksForGeeks';
    const stringB = 'GeeksQuiz';

    const result = longestcommonsubstring(stringA, stringB);
    assert.equal(result, 'Geeks');
  });

  it('should return empty string when one or both of inputs is empty', () => {
    const resultOne = longestcommonsubstring('abcdef', '');
    assert.equal(resultOne, '');
    const resultTwo = longestcommonsubstring('', 'abcasds');
    assert.equal(resultTwo, '');
    const resultThree = longestcommonsubstring('', '');
    assert.equal(resultThree, '');
  });

  it('should return empty string for letter and aggghhhww', () => {
    const stringA = 'letter';
    const stringB = 'aggghhhww';

    const result = longestcommonsubstring(stringA, stringB);
    assert.equal(result, '');
  });

  it('should return a for xysysysyysahhfghf and aaaaaa', () => {
    const stringA = 'xysysysyysahhfghf';
    const stringB = 'aaaaaa';

    const result = longestcommonsubstring(stringA, stringB);
    assert.equal(result, 'a');
  });
});
