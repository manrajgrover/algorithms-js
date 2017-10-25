const longestcommontrailingsubstring = (array) => {
  var A = array.concat().sort();
  var a1 = A[0];
  var a2 = A[A.length-1];
  var L = a1.length;
  var i = L - 1;
  while (i >= 0 && a1.charAt(i) === a2.charAt(i)) i -= 1;
  return a1.substring(i - 1, L);
};

module.exports = longestcommontrailingsubstring;
