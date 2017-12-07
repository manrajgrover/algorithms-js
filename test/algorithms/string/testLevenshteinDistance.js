/* eslint-env mocha */
const levenshteindistance = require('../../../src').algorithms.string.levenshteindistance;
const assert = require('assert');

describe('Levenshtein Distance', () => {
  it('should have no data when empty initialization', () => {
    const stringA = 'sunday';
    const stringB = 'saturday';

    const distance = levenshteindistance(stringA, stringB);
    assert.equal(distance, 3);
  });
});
