/* eslint-env mocha */
const logestcommonsubsequence = require('../../../src').algorithms.string.logestcommonsubsequence;
const assert = require('assert');

describe('LCS', () => {
  it('should find four letter long lsc for POLITECHNIKA and TOALETA', () => {
    const stringA = 'POLITECHNIKA';
    const stringB = 'TOALETA';

    const distance = logestcommonsubsequence(stringB, stringA);
    assert.equal(distance.length, 4);
  });

  it('should find one letter long lsc for 123 and 543', () => {
    const stringA = '123';
    const stringB = '543';

    const distance = logestcommonsubsequence(stringA, stringB);
    assert.equal(distance.length, 1);
  });

  it('should find four letter long lsc for abaabbaaa and babab', () => {
    const stringA = 'abaabbaaa';
    const stringB = 'babab';

    const distance = logestcommonsubsequence(stringA, stringB);
    assert.equal(distance.length, 4);
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
