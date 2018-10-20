const newtonSquareRoot = require("../../../src").algorithms.math.newtonSquareRoot;
const assert = require("assert");

describe("Newton's method for square root", () => {
    it("should return 0 when the the square root of 0 is requested", () => {
        assert.equal(newtonSquareRoot(0), 0);
    });

    it("should return 1 when the the square root of 1 is requested", () => {
        assert.equal(newtonSquareRoot(0), 0);
    });

    it("should return NaN when the the square root of any negative number is requested", () => {
        assert.equal(isNaN(newtonSquareRoot(-1)), true);
        assert.equal(isNaN(newtonSquareRoot(-121935.346)), true);
    });

    it("should return an integer when the the square root of any perfect square is requested", () => {
        assert.equal(newtonSquareRoot(25), 5);
        assert.equal(newtonSquareRoot(998001), 999);
    });

    it("The difference between the returned value and the internal javascript value should be less than 1e-5", () => {
        assert.equal(newtonSquareRoot(2) - Math.sqrt(2) < 0.00001, true);
    });
});