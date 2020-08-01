/* eslint-env mocha */
const logestcommonsubsequence = require('../../../src').algorithms.string.logestcommonsubsequence;
const assert = require('assert');

describe('LCS', () => {
  it('should find OLTA or OLEA for POLITECHNIKA and TOALETA', () => {
    const stringA = 'POLITECHNIKA';
    const stringB = 'TOALETA';

    const result = logestcommonsubsequence(stringB, stringA);
    assert.equal(['OLTA', 'OLEA'].indexOf(result) !== -1, true);
  });

  it('should find 3 for 123 and 543', () => {
    const stringA = '123';
    const stringB = '543';

    const result = logestcommonsubsequence(stringA, stringB);
    assert.equal(result, '3');
  });

  it('should find baba or abab for abaabbaaa and babab', () => {
    const stringA = 'abaabbaaa';
    const stringB = 'babab';

    const result = logestcommonsubsequence(stringA, stringB);
    assert.equal(['baba', 'abab'].indexOf(result) !== -1, true);
  });

  it('should return empty string when one of inputs is empty', () => {
    const stringA = 'abaabbaaa';
    const stringB = '';

    const distance = logestcommonsubsequence(stringA, stringB);
    assert.equal(distance.length, 0);
  });

  it('should return empty string when both inputs dont have lcs', () => {
    const stringA = 'abs';
    const stringB = '123';

    const distance = logestcommonsubsequence(stringA, stringB);
    assert.equal(distance.length, 0);
  });
});
