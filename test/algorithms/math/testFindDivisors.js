/* eslint-env mocha */
const findDivisors = require('../../../src').algorithms.math.findDivisors;
const assert = require('assert');

describe('Find Divisor', () => {
  it('should be able to handle 1', () => {
    assert.equal(findDivisors(1).join(', '), '1');
  });

  it('should be able to handle 0', () => {
    assert.equal(findDivisors(0), undefined);
  });

  it('should be able to square numbers', () => {
    assert.equal(findDivisors(81).join(', '), '1, 3, 9, 27, 81');
  });

  it('should be able to handle prime numbers', () => {
    assert.equal(findDivisors(73).join(', '), '1, 73');
  });

  it('should be able to handle positive numbers', () => {
    assert.equal(findDivisors(42).join(', '), '1, 2, 3, 6, 7, 14, 21, 42');
  });

  it('should be able to handle negative numbers', () => {
    assert.equal(findDivisors(-42).join(', '), '1, 2, 3, 6, 7, 14, 21, 42');
  });

  it('should be able to handle numbers with large number of factors', () => {
    // Highly composite number 166320 https://en.wikipedia.org/wiki/Highly_composite_number
    assert.equal(findDivisors(166320).join(', '), '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 21, 22, 24, 27, 28, 30, 33, 35, 36, 40, 42, 44, 45, 48, 54, 55, 56, 60, 63, 66, 70, 72, 77, 80, 84, 88, 90, 99, 105, 108, 110, 112, 120, 126, 132, 135, 140, 144, 154, 165, 168, 176, 180, 189, 198, 210, 216, 220, 231, 240, 252, 264, 270, 280, 297, 308, 315, 330, 336, 360, 378, 385, 396, 420, 432, 440, 462, 495, 504, 528, 540, 560, 594, 616, 630, 660, 693, 720, 756, 770, 792, 840, 880, 924, 945, 990, 1008, 1080, 1155, 1188, 1232, 1260, 1320, 1386, 1485, 1512, 1540, 1584, 1680, 1848, 1890, 1980, 2079, 2160, 2310, 2376, 2520, 2640, 2772, 2970, 3024, 3080, 3465, 3696, 3780, 3960, 4158, 4620, 4752, 5040, 5544, 5940, 6160, 6930, 7560, 7920, 8316, 9240, 10395, 11088, 11880, 13860, 15120, 16632, 18480, 20790, 23760, 27720, 33264, 41580, 55440, 83160, 166320');
  });
});
