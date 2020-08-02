const getDivisors = n => {
    let ans = [];
    if ( n < 1)
    	return [];
    if (n === 1) {
        return [1];
    }

    ans.push(1);
    ans.push(n);

    var mod = 2;
    while (mod * mod <= n) {
        if (n % mod === 0) {
            if (mod * mod < number) {
                ans.push(mod);
                ans.push(n/mod)
            } 
            else {
                ans.push(mod);
            }
        }
        mod++;
    }

    return ans;
}
module.exports = getDivisors;
