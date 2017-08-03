/**
 * Class for Graphs
 */
class Graph {
  constructor(directed = false) {
    /** @private */
    this._isDirected = directed;
    /** @private */
    this._vertices = new Set();
    /** @private */
    this._edges = [];
  }

  /**
   * Get size of graph
   * @return {Number} Size of graph
   * @public
   */
  get size() {
    return this._vertices.size;
  }

  /**
   * Get vertices of graph
   * @return {Array} Vertices in the graph
   * @public
   */
  get vertices() {
    return [...this._vertices];
  }

  /**
   * Check whether graph is empty or not
   * @return {Boolean} True if empty else False
   * @public
   */
  isEmpty() {
    return this._vertices.size === 0;
  }

  /**
   * Adds vertex to the Graph
   * @param {Number} vertex Vertex label
   * @public
   */
  addVertex(vertex) {
    vertex = String(vertex);

    if (this._vertices.has(vertex)) {
      throw new Error(`Vertix ${vertex} already exists`);
    }

    this._vertices.add(vertex);
    this._edges[vertex] = {};
  }

  /**
   * Adds edge between two vertices
   * @param {Number} vertexA Starting vertex label
   * @param {Number} vertexB Ending vertex label
   * @param {Number} weight  Weight to be added for edge
   * @public
   */
  addEdge(vertexA, vertexB, weight) {
    vertexA = String(vertexA);
    vertexB = String(vertexB);

    if (!this._vertices.has(vertexA)) {
      this.addVertex(vertexA);
    }

    if (!this._vertices.has(vertexB)) {
      this.addVertex(vertexB);
    }

    this._edges[vertexA][vertexB] = (this._edges[vertexA][vertexB] || 0) + weight;

    if (!this._isDirected) {
      this._edges[vertexB][vertexA] = (this._edges[vertexB][vertexA] || 0) + weight;
    }
  }

  /**
   * Check whether one vertex is neighbour to another
   * @param  {Number}  vertexA Origin vertex
   * @param  {Number}  vertexB Vertex to be checked for
   * @return {Boolean}         True if neighbour else False
   * @public
   */
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

  /**
   * Returns neighbours of a given vertex
   * @param  {Number} vertex Vertex whose neighbours are required
   * @return {Array}         List of neighbouring vertices
   * @public
   */
  getNeighbours(vertex) {
    return Object.keys(this._edges[String(vertex)]);
  }

  /**
   * Returns edge weight of edge between two vertices
   * @param  {Number} vertexA Starting Vertex label
   * @param  {Number} vertexB Ending Vertex label
   * @return {Number}         Edge weight
   * @public
   */
  getEdgeWeight(vertexA, vertexB) {
    if (!this.isNeighbour(vertexA, vertexB)) {
      throw new Error(`Vertex ${vertexA} and ${vertexB} are not neighbours`);
    }

    return this._edges[String(vertexA)][String(vertexB)];
  }
}

module.exports = Graph;
