/* eslint-env mocha */
const dijkstra = require('../../../src').algorithms.graph.dijkstra;
const Graph = require('../../../src').datastructures.Graph;
const assert = require('assert');

describe('dijkstra', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should error if node1 is not a number, node2 is not a number, or graph is not a Graph', () => {
    assert.throws(() => { dijkstra(null, 2, graph); });
    assert.throws(() => { dijkstra(1, null, graph); });
    assert.throws(() => { dijkstra(1, 2, null); });
  });

  it('should skip node if already visited', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 2, 1);
    graph.addEdge(1, 3, 2);
    graph.addEdge(2, 3, 2);
    graph.addEdge(2, 4, 1);
    assert.deepEqual(dijkstra(1, 4, graph), [1, 2, 4]);
  });

  it('should provide correct path for simple graph', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(1, 2, 1);
    graph.addEdge(1, 3, 1);
    assert.deepEqual(dijkstra(1, 2, graph), [1, 2]);
  });

  // Graph is based off of picture from http://web.stanford.edu/class/archive/cs/cs106b/cs106b.1158/images/graph-dijkstra-figure-1.png (pretend it's undirected)
  it('should provide correct path for complex graph', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);
    graph.addVertex(8);
    graph.addEdge(1, 2, 4);
    graph.addEdge(1, 4, 2);
    graph.addEdge(1, 5, 7);
    graph.addEdge(2, 5, 2);
    graph.addEdge(3, 5, 4);
    graph.addEdge(3, 6, 1);
    graph.addEdge(4, 7, 1);
    graph.addEdge(4, 8, 4);
    graph.addEdge(5, 6, 2);
    graph.addEdge(5, 8, 5);
    graph.addEdge(6, 8, 1);
    graph.addEdge(7, 8, 1);
    assert.deepEqual(dijkstra(1, 6, graph), [1, 4, 7, 8, 6]);
  });
});
