/* eslint-env mocha */
const dicecoefficient = require('../../../src').algorithms.string.dicecoefficient;
const assert = require('assert');

describe('Dice Coefficient', () => {
  it('should find dice coefficient between two strings', () => {
    const stringA = 'good morning';
    const stringB = 'bad morning';

    const coefficient = dicecoefficient(stringA, stringB);
    assert(coefficient > 0.76);
  });

  it('should find dice coefficient between two strings', () => {
    const stringA = 'compliment';
    const stringB = 'complement';

    const coefficient = dicecoefficient(stringA, stringB);
    assert(coefficient > 0.77);
  });

  it('should find dice coefficient between two strings', () => {
    const stringA = 'sealed';
    const stringB = 'healed';

    const coefficient = dicecoefficient(stringA, stringB);
    assert.equal(coefficient, 0.8);
  });

  it('should return 0 when B is empty', () => {
    const stringA = 'compliment';
    const stringB = '';

    const coefficient = dicecoefficient(stringA, stringB);
    assert.equal(coefficient, 0);
  });


  it('should return distance as 0 when no params are provided', () => {
    const coefficient = dicecoefficient();
    assert.equal(coefficient, 0);
  });
});
