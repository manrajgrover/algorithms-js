const longestcommontrailingsubstring = (array) => {
  const A = array.concat().sort();
  const a1 = A[0];
  const a2 = A[A.length - 1];
  const L = a1.length;
  let i = L - 1;
  while (i >= 0 && a1.charAt(i) === a2.charAt(i)) i -= 1;
  return a1.substring(i - 1, L);
};

module.exports = longestcommontrailingsubstring;
