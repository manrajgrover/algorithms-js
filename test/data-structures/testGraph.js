/* eslint-env mocha */
const Graph = require('../../src').datastructures.Graph;
const assert = require('assert');

describe('Graph', () => {
  it('should be empty when initialized', () => {
    const inst = new Graph();

    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
    assert.deepStrictEqual(inst.vertices, []);
  });

  it('should create a graph', () => {
    const inst = new Graph();

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    assert.throws(() => inst.addVertex(1));

    inst.addEdge(1, 2, 1);
    inst.addEdge(1, 3, 1);
    inst.addEdge(1, 5, 1);
    inst.addEdge(3, 4, 1);
    inst.addEdge(1, 5, 1);

    assert(!inst.isEmpty());
    assert.equal(inst.size, 5);
    assert.deepStrictEqual(inst.vertices, ['1', '2', '3', '4', '5']);
  });

  it('should get edge weight', () => {
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
    inst.addEdge(5, 6, 1);
    inst.addEdge(7, 8, 1);

    assert.equal(inst.getEdgeWeight(1, 2), 1);
    assert.equal(inst.getEdgeWeight(2, 1), 1);

    assert.throws(() => inst.getEdgeWeight(1, 4));
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
