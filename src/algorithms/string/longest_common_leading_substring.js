/* source: https://stackoverflow.com/questions/1916218/find-the-longest-common-starting-substring-in-a-set-of-strings#1917041 */
const longestcommonleadingsubstring = (array) => {
  const A = array.concat().sort();
  const a1 = A[0];
  const a2 = A[A.length-1];
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i += 1;
  return a1.substring(0, i);
};

module.exports = longestcommonleadingsubstring;
