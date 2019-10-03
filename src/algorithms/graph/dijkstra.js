const Graph = require("../../data-structures/graph");

/**
 * Dijkstra's shortest path first algorithm
 * @param {Number} node1 beginning node
 * @param {Number} node2 end node
 * @param {Graph}  graph the graph to parse for SPF
 * @return {array} indices of shortest path in node order
 */

const dijkstra = (node1, node2, graph) => {
  // Check the types of the arguments.
  if (
    typeof node1 !== "number" ||
    typeof node2 !== "number" ||
    !(graph instanceof Graph)
  ) {
    throw new Error("Invalid arg type provided");
  }
  // Set the shortest path found set to the node1
  const spfSet = new Set([node1]);

  // Initialize vertex cost and predecessor maps
  const vertices = graph.vertices;
  const costMap = new Map();
  const predMap = new Map();

  // Loop through the vertices and set their costs and predecessors to infinity
  for (let i = 0; i < vertices.length; i += 1) {
    costMap.set(parseInt(vertices[i], 10), Infinity);
    predMap.set(parseInt(vertices[i], 10), Infinity);
  }

  // The cost of node1 going to itself is 0
  costMap.set(node1, 0);

  // Keep looping until we have examined all nodes in the graph
  while (spfSet.size < graph.size) {
    let nodeToAdd;
    let costToAdd;
    let predToAdd;
    const currentNodes = Array.from(spfSet);
    let lowestCost = Infinity;

    // Loop through the neighbors of the examined nodes.
    for (let i = 0; i < currentNodes.length; i += 1) {
      const neighbours = graph.getNeighbours(currentNodes[i]);

      for (let j = 0; j < neighbours.length; j += 1) {
        // Find the cost of the neighbor
        const edgeCost = graph.getEdgeWeight(currentNodes[i], neighbours[j]);
        // The neighbor node
        const neighborNode = parseInt(neighbours[j], 10);

        if (costMap.get(neighborNode) !== Infinity) {
          continue;
        } else if (costMap.get(currentNodes[i]) + edgeCost < lowestCost) {
          lowestCost = costMap.get(currentNodes[i]) + edgeCost;
          nodeToAdd = neighborNode;
          costToAdd = costMap.get(currentNodes[i]) + edgeCost;
          predToAdd = currentNodes[i];
        }
      }
    }

    costMap.set(nodeToAdd, costToAdd);
    predMap.set(nodeToAdd, predToAdd);
    spfSet.add(nodeToAdd);

    if (nodeToAdd === node2) {
      break;
    }
  }

  let currentPredCheckNode = node2;
  const pathSet = new Set();
  while (currentPredCheckNode !== node1) {
    pathSet.add(currentPredCheckNode);
    currentPredCheckNode = predMap.get(currentPredCheckNode);
  }
  pathSet.add(currentPredCheckNode);

  return Array.from(pathSet).reverse();
};

module.exports = dijkstra;
