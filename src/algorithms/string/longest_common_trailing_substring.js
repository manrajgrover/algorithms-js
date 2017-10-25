const longestcommontrailingsubstring = (array) => {
    var A = array.concat().sort(), 
    	a1 = A[0], 
    	a2 = A[A.length-1], 
    	L = a1.length, 
    	i = L - 1;
    while (i >= 0 && a1.charAt(i) === a2.charAt(i)) i--;
    return a1.substring(i - 1, L);
}

module.exports = longestcommontrailingsubstring;
