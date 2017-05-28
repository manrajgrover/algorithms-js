class Graph {
  constructor(directed = false) {
    this._isDirected = directed;
    this._vertices = new Set();
    this._edges = [];
  }

  get size() {
    return this._vertices.size;
  }

  get vertices() {
    return [...this._vertices];
  }

  isEmpty() {
    return this._vertices.size === 0;
  }

  addVertex(vertex) {
    vertex = String(vertex);

    if (this._vertices.has(vertex)) {
      throw new Error(`Vertix ${vertex} already exists`);
    }

    this._vertices.add(vertex);
    this._edges[vertex] = {};
  }

  addEdge(vertexA, vertexB, weight = 0) {
    vertexA = String(vertexA);
    vertexB = String(vertexB);

    if (!this._vertices.has(vertexA)) {
      this.addVertex(vertexA);
    }

    if (!this._vertices.has(vertexB)) {
      this.addVertex(vertexB);
    }

    this._edges[vertexA][vertexB] = (this._edges[vertexA][vertexB] || 0) + weight;

    if (!this.isDirected) {
      this._edges[vertexB][vertexA] = (this._edges[vertexB][vertexA] || 0) + weight;
    }
  }

  isNeighbour(vertexA, vertexB) {
    vertexA = String(vertexA);
    vertexB = String(vertexB);

    const neighbours = Object.keys(this._edges[vertexA]);

    for (let i = 0; i < neighbours.length; i += 1) {
      if (neighbours[i] === vertexB) {
        return true;
      }
    }

    return false;
  }

  getNeighbours(vertex) {
    return this._edges[String(vertex)];
  }

  getEdgeWeight(vertexA, vertexB) {
    if (!this.isNeighbour(vertexA, vertexB)) {
      throw new Error(`Vertex ${vertexA} and ${vertexB} are not neighbours`);
    }

    return this._edges[String(vertexA)][String(vertexB)];
  }
}

module.exports = Graph;
