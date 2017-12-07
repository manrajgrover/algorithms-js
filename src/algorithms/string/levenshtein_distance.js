const levenshteindistance = (a = '', b = '') => {
  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  const dp = [...Array(b.length + 1)].map(() => Array(a.length + 1));

  for (let i = 0; i <= b.length; i += 1) {
    dp[i][0] = i;
  }

  for (let i = 0; i <= a.length; i += 1) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1));
      }
    }
  }

  return dp[b.length][a.length];
};

module.exports = levenshteindistance;
