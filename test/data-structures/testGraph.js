/* eslint-env mocha */
const Graph = require('../../src').DataStructures.Graph;
const assert = require('assert');

describe('Graph', () => {
  it('should be empty when initialized', () => {
    const inst = new Graph();

    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
    assert.deepStrictEqual(inst.vertices, []);
  });
  });
});
