const assert = require('assert');

const validTraingle = require('../../../src/algorithms/geometry/valid_traingle');

describe('validTraingle', function() {
  it('should return false if the sum of two sides is less than or equal to the third', function () {
    assert.equal(false, validTraingle(1,2,3));
    assert.equal(false, validTraingle(3,6,9));
    assert.equal(false, validTraingle(5, 10, 16));
  });

  it('should return true if the sum of two sides is always greater than the third', function () {
    assert.equal(true, validTraingle(3, 4, 5));
    assert.equal(true, validTraingle(5, 6, 9));
    assert.equal(true, validTraingle(3, 2, 4));
  });

});
