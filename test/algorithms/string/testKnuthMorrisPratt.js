/* eslint-env mocha */
const knuthMorrisPratt = require('../../../src').algorithms.string.knuthMorrisPratt;
const assert = require('assert');

describe('Knuth Morris Pratt', () => {
  it('should find an occurence of pattern in text', () => {
    const text = 'THIS IS A TEST TEXT';
    const pattern = 'TEST';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, [10]);
  });

  it('should find many occurences of pattern in text', () => {
    const text = 'AAAAAAAAAAAAAAAABAAAAAAABAAAAAAAAA';
    const pattern = 'AAAAA';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 25, 26, 27, 28, 29]);
  });

  it('should find some occurences of pattern in text', () => {
    const text = 'AABAACAADAABAABA';
    const pattern = 'AABA';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, [0, 9, 12]);
  });

  it('should not find any occurences of pattern in text', () => {
    const text = 'ABABABCABABABCABABABC';
    const pattern = 'ABABAC';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, []);
  });  

  it('should return an empty list when text = ""', () => {
    const text = '';
    const pattern = 'AABA';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, []);
  });

  it('should return an empty list when pattern = ""', () => {
    const text = 'AABA';
    const pattern = '';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, []);
  });

  it('should return [0] when text = pattern', () => {
    const text = 'AABCCD';
    const pattern = 'AABCCD';

    const occurences = knuthMorrisPratt(text, pattern);
    assert.deepEqual(occurences, [0]);
  });
});
