/**
 * Finds the shortest path from one vertex to the rest of the vertices
 * in a graph.
 * @param  {Graph} G weighted digraph (with positive or negative weights on edges)
 * withouth negative cycles (vertices should have names starting from 0, 1, 2... n)
 * @return {Array[Array]} shortest paths between all vertices
 *
 * References: https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
 */
const bellmanford = (G, source) => {
  const graphSize = G.size;

  const distance = new Map();
  G.vertices.forEach(vertex => {
    distance.set(Number(vertex), Infinity);
  });
  distance.set(source, 0);

  const edges = G.edges;
  for (let i = 0; i < graphSize - 1; i += 1) {
    edges.forEach(({ from, to, weight }) => {
      if (distance.get(Number(from)) + weight < distance.get(Number(to))) {
        distance.set(Number(to), distance.get(Number(from)) + weight);
      }
    });
  }
  return distance;
};

module.exports = bellmanford;
