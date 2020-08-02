/* eslint-env mocha */
const johnson = require("../../../src").algorithms.graph.johnson;
const Graph = require("../../../src").datastructures.Graph;
const assert = require("assert");

describe("Johson", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(true);
  });

  it("should return correct shortest path for directed graph with negative weighted edges", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);

    graph.addEdge(1, 2, -2);
    graph.addEdge(2, 3, -1);
    graph.addEdge(3, 1, 4);
    graph.addEdge(3, 4, 2);
    graph.addEdge(3, 6, -3);
    graph.addEdge(5, 4, 1);
    graph.addEdge(5, 6, -4);

    assert.deepEqual(johnson(graph, 1, 2), [1, 2]);
    assert.deepEqual(johnson(graph, 1, 3), [1, 2, 3]);
    assert.deepEqual(johnson(graph, 1, 4), [1, 2, 3, 4]);
  });
});
