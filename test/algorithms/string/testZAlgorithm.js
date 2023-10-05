/* eslint-env mocha */
const zalgorithm = require('../../../src').algorithms.string.zalgorithm;
const assert = require('assert');

describe('Z Algorithm', () => {
  it('should return [4]', () => {
    const text = 'xaayaab';
    const pattern = 'aab';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, [4]);
  });

  it('should return [0,5,9]', () => {
    const text = 'aabxcaabxaabxay';
    const pattern = 'aabx';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, [0,5,9]);
  });

  it('should return [6]', () => {
    const text = 'abxabcabcaby';
    const pattern = 'abcaby';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, [6]);
  });

  it('should return null when text or pattern is empty', () => {
    const text = '';
    const pattern = '';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, null);
  });

  it('should return [0,54]', () => {
    const text = 'Mississippi is a beautiful state with lots of rivers. Mississippi River is the longest river in the United States.';
    const pattern = 'Mississippi';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, [0,54]);
  });

  it('should return [6,194]', () => {
    const text = 'Mount Everest, also known as Sagarmatha in Nepal, is the world\'s tallest mountain. It is a part of the Himalayas and has long been a challenge for climbers. The first successful ascent of Mount Everest was in 1953 by Sir Edmund Hillary and Tenzing Norgay.';
    const pattern = 'Everest';

    const result = zalgorithm(text, pattern);
    assert.deepEqual(result, [6,194]);
  });
});
