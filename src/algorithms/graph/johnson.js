const bellmanford = require("./bellman-ford");
const dijkstra = require("./dijkstra");
const Graph = require("../").graph;

/**
 * The Johnson algorithm can find the shortest path between two nodes in a
 * directed graph by inserting an imaginary node to the graph, then using
 * the Bellman-Ford algorithm, then normalizing the edge weights, and finally
 * using Dijkstra's algorithm.
 * @param {Graph} graph the graph on which the algorithm is run
 * @param {Number} startNode beginning node
 * @param {Number} endNode end node
 */
const johnson = (graph, startNode, endNode) => {
  if (!graph._isDirected) {
    throw new Error(
      "The graph must be a directed graph to use the johnson algorithm."
    );
  }

  // Pick a unique number for the imaginary vertex.
  const newVertex = graph.size + 1;
  graph.addVertex(newVertex);

  graph.vertices.forEach(currentVertex => {
    // Add a zero-weighted edge from the new vertex to each of the other vertices.
    // This new vertex and its edges have no effect on the graph since all of the
    // edges have a weight of 0.
    if (currentVertex != newVertex) {
      graph.addEdge(newVertex, currentVertex, 0);
    }
  });
  // Run the bellman-ford algorithm from the new vertex.
  const bfPaths = bellmanford(graph, newVertex);

  // Remove the imaginary vertex.
  graph.removeVertex(newVertex);
  let normalizedGraph = graph.copy();

  for (let i = 0; i < normalizedGraph.edges.length; i++) {
    let currentEdge = normalizedGraph.edges[i];
    let fromWeight = bfPaths.get(Number(currentEdge.from));
    let toWeight = bfPaths.get(Number(currentEdge.to));
    // Normalize the edge weight
    let edgeWeight = fromWeight + currentEdge.weight - toWeight;
    // Remove the old edge from the graph and replace it with the normalized edge.
    normalizedGraph.removeEdge(currentEdge.from, currentEdge.to);
    normalizedGraph.addEdge(
      Number(currentEdge.from),
      Number(currentEdge.to),
      Number(edgeWeight)
    );

    const pathSet = dijkstra(startNode, endNode, normalizedGraph);
    return pathSet;
  }
};

module.exports = johnson;
