const LRUCache = require("../../src/data-structures/lru_cache");
const assert = require("assert");

describe("LRU Cache", () => {
  it("should be empty when initalized", () => {
    const inst = new LRUCache(3);
    assert.equal(inst.size, 0);
  });
});
