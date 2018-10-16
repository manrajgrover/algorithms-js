const kmp = require('../../../src').algorithms.string.kmp;
const assert = require('assert');

describe('Binary Search', () => {
  it('should return -1 for empty string', () => {
    const index = kmp("", "hello");

    assert.equal(index, -1);
  });

  it('should return -1 for pattern not found', () => {
    const index = kmp("this is a string", "hello");

    assert.equal(index, -1);
  });

  it('should return index of first occurence of substring', () => {
    const index = kmp("hello world", "llo");

    assert.equal(index, 2);
  });
});
