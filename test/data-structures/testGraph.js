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
  it('should get neighbours', () => {
    const inst = new Graph();
    
    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    inst.addEdge(1, 2, 1);
    inst.addEdge(1, 3, 1);
    inst.addEdge(1, 5, 1);
    inst.addEdge(3, 4, 1);
    inst.addEdge(1, 5, 1);

    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3', '5']);
  });
});
