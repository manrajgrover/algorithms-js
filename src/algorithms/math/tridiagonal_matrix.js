// In the code below, indexes start with zero. This means, replace in the
// Wikipedia article's "Method" section:
//
//     a[j] → b[j-2]
//     b[j] → b[j-1]
//     c[j] → c[j-1]
//     d[j] → d[j-1]
//     x[j] → x[j-1]
//     c'[j] → c'[j-1]
//     d'[j] → d'[j-1]

/*jslint node: true, maxerr: 50, maxlen: 80 */

'use strict';

var createCp, createDp, solve, solve1;

// cp: c'
createCp = function (a, b, c, n) {
    var i, cp = [];

    cp[0] = c[0] / b[0];
    if (!isFinite(cp[0])) {
        return null;
    }

    for (i = 1; i < n - 1; i += 1) {
        cp[i] = c[i] / (b[i] - a[i - 1] * cp[i - 1]);
        if (!isFinite(cp[i])) {
            return null;
        }
    }

    return cp;
};

// dp: d'
createDp = function (a, b, d, cp, n) {
    var i, dp = [];

    dp[0] = d[0] / b[0];
    if (!isFinite(dp[0])) {
        return null;
    }

    for (i = 1; i < n; i += 1) {
        dp[i] = (d[i] - a[i - 1] * dp[i - 1]) / (b[i] - a[i - 1] * cp[i - 1]);
        if (!isFinite(dp[i])) {
            return null;
        }
    }

    return dp;
};

solve = function (a, b, c, d, n) {
    var i, x = [], cp, dp;

    cp = createCp(a, b, c, n);
    if (cp === null) {
        return null;
    }
    dp = createDp(a, b, d, cp, n);
    if (dp === null) {
        return null;
    }

    x[n - 1] = dp[n - 1];
    for (i = n - 2; i >= 0; i -= 1) {
        x[i] = dp[i] - cp[i] * x[i + 1];
    }

    return x;
};

solve1 = function (b, d) {
    var x = [d[0] / b[0]];

    return isFinite(x[0]) ? x : null;
};

// Returns null if there is no solution, an array of x-values otherwise.
module.exports = function (a, b, c, d) {
    var n = d.length;

    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return solve1(b, d);
    }

    return solve(a, b, c, d, n);
};
