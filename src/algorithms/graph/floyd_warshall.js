/**
 * Calculates GCD of two numbers
 * @param  {Graph} G weighted graph (with positive or negative weights on edges) 
 * withouth negative cycles
 * @return {Array[Array]} shortest paths between all vertices
 *
 * References: https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */
function floydwarshall(G) {
  const size = G.size;
  const dp = [...Array(size)].map(() => Array(size));

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      dp[i][j] = Infinity;
    }
  }

  for (let i = 0; i < size; i += 1) {
    dp[i][i] = 0;
  }

  G.vertices.forEach((vertex) => {
    const neighbours = G.getNeighbours(vertex);
    if (neighbours && neighbours.length) {
      neighbours.forEach((n) => {
        dp[vertex - 1][n - 1] = G.getEdgeWeight(vertex, n);
      });
    }
  });


  for (let k = 0; k < size; k += 1) {
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const sum = dp[i][k] + dp[k][j];
        if (dp[i][j] > sum) {
          dp[i][j] = sum;
        }
      }
    }
  }
  return dp;
}

module.exports = floydwarshall;
