/* eslint-env mocha */
const bellmanford = require('../../../src').algorithms.graph.bellmanford;
const Graph = require('../../../src').datastructures.Graph;
const assert = require('assert');

describe('Bellman-Ford', () => {
  it('should return correct shortest path for directed graph', () => {
    const inst = new Graph(true);
    inst.addVertex(0);
    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);


    inst.addEdge(0, 1, 10);
    inst.addEdge(0, 5, 8);
    inst.addEdge(1, 3, 2);
    inst.addEdge(2, 1, 1);
    inst.addEdge(3, 2, -2);

    inst.addEdge(4, 3, -1);
    inst.addEdge(4, 1, -4);
    inst.addEdge(5, 4, 1);

    const result = bellmanford(inst, 0);
    assert.deepStrictEqual(result, [0, 5, 5, 7, 9, 8]);
  });
});
