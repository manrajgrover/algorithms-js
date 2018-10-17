/* eslint-env mocha */
const floydwarshall = require('../../../src').algorithms.graph.floydwarshall;

const Graph = require('../../../src').datastructures.Graph;

const assert = require('assert');

describe('Floyd-Warshall', () => {
  it('should calculate proper shortest path matrix for direct graph', () => {
    const inst = new Graph(true);

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);

    inst.addEdge(1, 3, -2);
    inst.addEdge(3, 4, 2);
    inst.addEdge(4, 2, -1);
    inst.addEdge(2, 1, 4);
    inst.addEdge(2, 3, 3);

    const results = floydwarshall(inst);
    assert.deepStrictEqual(results[0], [0, -1, -2, 0]);
    assert.deepStrictEqual(results[1], [4, 0, 2, 4]);
    assert.deepStrictEqual(results[2], [5, 1, 0, 2]);
    assert.deepStrictEqual(results[3], [3, -1, 1, 0]);
  });

  it('should calculate proper shortest path matrix for graph', () => {
    const inst = new Graph();

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);

    inst.addEdge(1, 3, 100);
    inst.addEdge(1, 2, 3);
    inst.addEdge(1, 4, 4);
    inst.addEdge(4, 3, 3);

    const results = floydwarshall(inst);
    assert.deepStrictEqual(results[0], [0, 3, 7, 4]);
    assert.deepStrictEqual(results[1], [3, 0, 10, 7]);
    assert.deepStrictEqual(results[2], [7, 10, 0, 3]);
    assert.deepStrictEqual(results[3], [4, 7, 3, 0]);
  });
});
