/* eslint-env mocha */
const gcd_multiple_numbers =
  require("../../../src").algorithms.math.gcd_multiple_numbers;

const assert = require("assert");

describe("GCD", () => {
  it("should return 0 for either or both numbers as 0", () => {
    assert.equal(gcd_multiple_numbers(0, 10), 0);
    assert.equal(gcd_multiple_numbers(10, 0), 0);
    assert.equal(gcd_multiple_numbers(0, 0), 0);
  });

  it("should return 1 for 1 and positive numbers >= 1", () => {
    assert.equal(gcd_multiple_numbers(1, 10), 1);
    assert.equal(gcd_multiple_numbers(1, 1), 1);
    assert.equal(gcd_multiple_numbers(10, 1), 1);
  });

  it("should return gcd of two numbers", () => {
    assert.equal(gcd_multiple_numbers(60, 10), 10);
    assert.equal(gcd_multiple_numbers(65, 10), 5);
    assert.equal(gcd_multiple_numbers(3, 2), 1);
  });

  it("should return gcd of negative numbers", () => {
    assert.equal(gcd_multiple_numbers(-60, -10), 10);
    assert.equal(gcd_multiple_numbers(65, -10), 5);
    assert.equal(gcd_multiple_numbers(-3, 2), 1);
  });
});
