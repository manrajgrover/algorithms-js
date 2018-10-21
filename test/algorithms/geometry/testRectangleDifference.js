const RectangleDifference = require("../../../src").algorithms.geometry.RectangleDifference;
const assert = require("assert");

describe("Difference of rectangles", () => {
  it("should return empty array when rectangles do not intersect", () => {
    const differenceArrays = new RectangleDifference(1, 10, 5, 5, 1, 2, 2, 2).difference;
    assert.equal(differenceArrays.length, 0);
  });


  it("should return empty array when rect 2 contains rect 1", () => {
    const differenceArrays = new RectangleDifference(2, 11, 2, 2, 1, 10, 5, 5).difference;
    assert.equal(differenceArrays.length, 0);
  });


  it("should return non-empty array when rectangles intersect and rect 2 does not contain rect 1", () => {
    const differenceArrays = new RectangleDifference(1, 10, 5, 5, 2, 11, 2, 2).difference;
    assert.equal(differenceArrays.length, 4);
  });
});
