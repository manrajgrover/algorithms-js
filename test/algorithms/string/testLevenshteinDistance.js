/* eslint-env mocha */
const levenshteindistance = require('../../../src').algorithms.string.levenshteindistance;
const assert = require('assert');

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
