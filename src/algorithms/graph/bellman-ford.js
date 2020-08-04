
const getAllEdges = (G) => {
  const edges = [];
  G.vertices.forEach((vertex) => {
    const neighbours = G.getNeighbours(vertex);
    if (neighbours && neighbours.length) {
      neighbours.forEach((n) => {
        edges.push({
          from: vertex,
          to: n,
          weight: G.getEdgeWeight(vertex, n)
        });
      });
    }
  });
  return edges;
};

/**
 * Calculates GCD of two numbers
 * @param  {Graph} G weighted digraph (with positive or negative weights on edges)
 * withouth negative cycles (vertices should have names starting from 0, 1, 2... n)
 * @return {Array[Array]} shortest paths between all vertices
 *
 * References: https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
 */
const bellmanford = (G, source) => {
  const graphSize = G.size;

  const distance = new Array(graphSize);
  for (let i = 0; i < graphSize; i += 1) {
    distance[i] = Infinity;
  }
  distance[source] = 0;

  const edges = getAllEdges(G);
  for (let i = 0; i < graphSize - 1; i += 1) {
    edges.forEach(({ from, to, weight }) => {
      if (distance[from] + weight < distance[to]) {
        distance[to] = distance[from] + weight;
      }
    });
  }
  return distance;
};


module.exports = bellmanford;
