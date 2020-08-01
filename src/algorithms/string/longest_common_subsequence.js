const longestCommonSubsequence = (a = '', b = '') => {
    if(a.length == 0 || b.length == 0)
        return 0;
    else{
        let dp = new Array(a.length+1).fill(0).map(() => new Array(b.length+1).fill(0));
        for(let i = 1; i <= a.length; ++i){
            for(let j = 1; j <= b.length; ++j){
                if(a[i] === b[j])
                    dp[i][j] = 1 + dp[i-1][j-1];    
                else
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[a.length][b.length];
    }    
};
  
module.exports = longestCommonSubsequence;
  