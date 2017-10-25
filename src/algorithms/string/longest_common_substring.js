/* source: https://stackoverflow.com/questions/1916218/find-the-longest-common-starting-substring-in-a-set-of-strings#1917041 */
const longestcommonsubstring = (array) => {
    var A = array.concat().sort(), 
    	a1 = A[0], 
    	a2 = A[A.length-1], 
    	L = a1.length, 
    	i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
}

module.exports = longestcommonsubstring;
