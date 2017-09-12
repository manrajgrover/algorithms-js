const levenshteindistance = (a = '', b = '') => {
  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  const dp = [...Array(a.length)].map(() => Array(b.length));

  for (let i = 0; i <= b.length; i += 1) {
    for (let j = 0; j <= a.length; j += 1) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (b.charAt(i - 1) === a.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1));
      }
    }
  }

  return dp[b.length][a.length];
};

module.exports = levenshteindistance;
