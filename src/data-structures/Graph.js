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

  addEdge(vertexA, vertexB, weight = 0) {
    vertexA = String(vertexA);
    vertexB = String(vertexB);

    if (!this.vertices.has(vertexA)) {
      this.addVertex(vertexA);
    }

    if (!this.vertices.has(vertexB)) {
      this.addVertex(vertexB);
    }

    this.edges[vertexA][vertexB] = (this.edges[vertexA][vertexB] || 0) + weight;

    if (!this.isDirected) {
      this.edges[vertexB][vertexA] = (this.edges[vertexB][vertexA] || 0) + weight;
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
