/* eslint-env mocha */
const Graph = require('../../src').datastructures.Graph;
const assert = require('assert');

describe('Graph', () => {
  it('should be empty when initializing undirected graph', () => {
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

  it('should be empty when initializing directed graph', () => {
    const inst = new Graph(true);

    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
    assert.deepStrictEqual(inst.vertices, []);
  });

  it('should get neighbours from directed graph', () => {
    const inst = new Graph(true);

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    inst.addEdge(1, 2, 1);
    inst.addEdge(1, 3, 1);
    inst.addEdge(1, 5, 1);
    inst.addEdge(3, 4, 1);

    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3', '5']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['4']);
  });

  it('should check bfs traversal', () => {
    const inst = new Graph(true);

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    inst.addEdge(1, 2, 1);
    inst.addEdge(1, 3, 1);
    inst.addEdge(1, 5, 1);
    inst.addEdge(5, 2, 1);
    inst.addEdge(3, 4, 1);

    const traversalOne = [];

    const cbOne = v => traversalOne.push(v);
    inst.bfs(1, cbOne);

    assert.deepStrictEqual(traversalOne, ['1', '2', '3', '5', '4']);

    const traversalTwo = [];

    const cbTwo = v => traversalTwo.push(v);
    inst.bfs(2, cbTwo);

    assert.deepStrictEqual(traversalTwo, ['2']);
  });

  it('should check if edge is removed', () => {
    const inst = new Graph();

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    inst.addEdge(1, 2);
    inst.addEdge(1, 3);
    inst.addEdge(1, 5);
    inst.addEdge(3, 4);

    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3', '5']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['1', '4']);

    inst.removeEdge(1, 2);
    assert.deepStrictEqual(inst.getNeighbours(1), ['3', '5']);

    inst.removeEdge(1, 3);
    assert.deepStrictEqual(inst.getNeighbours(1), ['5']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['4']);
  });

  it('should check if vertex is removed', () => {
    const inst = new Graph();

    inst.addVertex(1);
    inst.addVertex(2);
    inst.addVertex(3);
    inst.addVertex(4);
    inst.addVertex(5);

    inst.addEdge(1, 2);
    inst.addEdge(1, 3);
    inst.addEdge(1, 5);
    inst.addEdge(1, 4);
    inst.addEdge(3, 4);

    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3', '4', '5']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['1', '4']);

    inst.removeVertex(5);
    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3', '4']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['1', '4']);

    inst.removeVertex(4);
    assert.deepStrictEqual(inst.getNeighbours(1), ['2', '3']);
    assert.deepStrictEqual(inst.getNeighbours(3), ['1']);
  });
});
