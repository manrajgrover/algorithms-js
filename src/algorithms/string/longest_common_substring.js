/**
 * Returns Longest Common Substring of two strings
 * @param  {String} firstWord First string
 * @param  {String} secondWord Second string
 * @return {String} One of the possbile longest common substring for given inputs
 */
function longestcommonsubstring(firstWord = '', secondWord = '') {
  const firstWordSize = firstWord.length;
  const secondWordSize = secondWord.length;
  const table = [...Array(firstWordSize + 1)].map(() => Array(secondWordSize + 1));
  let maxSubstringLength = 0;
  let maxSubstringRow = 0;
  let maxSubstringCol = 0;
  for (let i = 0; i <= firstWordSize; i += 1) {
    for (let j = 0; j <= secondWordSize; j += 1) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else if (firstWord.charAt(i - 1) === secondWord.charAt(j - 1)) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxSubstringLength) {
          maxSubstringLength = table[i][j];
          maxSubstringRow = i;
          maxSubstringCol = j;
        }
      } else {
        table[i][j] = 0;
      }
    }
  }

  let result = '';
  while (table[maxSubstringRow][maxSubstringCol] !== 0) {
    result = firstWord.charAt(maxSubstringRow - 1) + result;
    maxSubstringRow -= 1;
    maxSubstringCol -= 1;
  }
  return result;
}

module.exports = longestcommonsubstring;
