class Graph {
  constructor(directed = false) {
    this.isDirected = directed;
    this.vertices = new Set();
    this.edges = [];
  }

  get size() {
    return this.vertices.length;
  }

  addVertex(vertex) {
    if (this.vertices.has(vertex)) {
      throw new Error(`Vertix ${vertex} already exists`);
    }

    this.vertices.add(vertex);
    this.edges[vertex] = {};
  }

  addEdge(vertexA, vertexB) {
    this.edges[vertexA].push(vertexB);
    if (!this.isDirected) {
      this.edges[vertexB].push(vertexA);
    }
  }

  isNeighbour(vertexA, vertexB) {
    vertexA = String(vertexA);
    vertexB = String(vertexB);

    const neighbours = Object.keys(this.edges[vertexA]);

    for (let i = 0; i < neighbours.length; i += 1) {
      if (neighbours[i] === vertexB) {
        return true;
      }
    }

    return false;
  }

}

module.exports = Graph;
