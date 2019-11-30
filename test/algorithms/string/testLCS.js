const LCS = require('lcs');

describe('Levenshtein Distance', () => {
  it('should find levenshtein distance between two strings', () => {
    const stringA = 'sunday';
    const stringB = 'saturday';

    const distance = levenshteindistance(stringA, stringB);
    assert.equal(distance, 3);
  });

  it('should return length of string A when B is empty', () => {
    const stringA = 'sunday';
    const stringB = '';

    const distance = levenshteindistance(stringA, stringB);
    assert.equal(distance, 6);
  });

  it('should return length of string B when A is empty', () => {
    const stringA = '';
    const stringB = 'saturday';

    const distance = levenshteindistance(stringA, stringB);
    assert.equal(distance, 8);
  });

  it('should return distance as 0 when no params are provided', () => {
    const distance = levenshteindistance();
    assert.equal(distance, 0);
  });
});

//alert(longestCommon("lalulalulu", "laalulu"));
