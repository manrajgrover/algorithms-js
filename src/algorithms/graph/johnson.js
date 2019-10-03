const bellmanford = require("./bellman-ford");
const dijkstra = require("./dijkstra");

/**
 *
 * @param {Graph} graph
 * @param {Number} sourceNode
 */
const johnson = (graph, sourceNode) => {
  const newVertex = graph.size + 1;
  graph.addVertex(newVertex); // Add a new vertex to the graph with a unique label.
  graph.vertices().forEach(currentVertex => {
    // Add a zero-weighted edge from the new vertex to each of the other vertices.
    graph.addEdge(newVertex, currentVertex, 0);
  });

  // Run the bellman-ford algorithm from the new vertex.
  const bfPaths = bellmanford(graph, newVertex);
};
