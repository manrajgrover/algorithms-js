/* eslint-env mocha */
const longestcommontrailingsubstring = require('../../../src').algorithms.string.longestcommontrailingsubstring;
const assert = require('assert');

describe('Longest common trailing substring', () => {
  it('should find bb for xyzaabb and bb', () => {
    const stringA = 'xyzaabb';
    const stringB = 'bb';

    const result = longestcommontrailingsubstring(stringA, stringB);
    assert.equal(result, 'bb');
  });

  it('should find abab for xyzabab and cabab', () => {
    const stringA = 'xyzabab';
    const stringB = 'cabab';

    const result = longestcommontrailingsubstring(stringA, stringB);
    assert.equal(result, 'abab');
  });

  it('should return empty string when one or both of inputs is empty', () => {
    const resultOne = longestcommontrailingsubstring('abcdef', '');
    assert.equal(resultOne, '');
    const resultTwo = longestcommontrailingsubstring('', 'abcasds');
    assert.equal(resultTwo, '');
    const resultThree = longestcommontrailingsubstring('', '');
    assert.equal(resultThree, '');
  });

  it('should find u for u and ahhfghfgdfhytytyu', () => {
    const stringA = 'u';
    const stringB = 'ahhfghfgdfhytytyu';

    const result = longestcommontrailingsubstring(stringA, stringB);
    assert.equal(result, 'u');
  });

  it('should find x for x and x', () => {
    const stringA = 'x';
    const stringB = 'x';

    const result = longestcommontrailingsubstring(stringA, stringB);
    assert.equal(result, 'x');
  });
});
