const knuthMorrisPratt = (text, pattern) => {
  // lps = the longest proper suffix of pat[0..i] which is also a prefix of pat[0..i]
  const lps = [0];
  
  // precompute lps[]
  for (let i = 1, j = 0; i < pattern.length; i += 1) {
    while (j < i && pattern[i] !== pattern[j] && j > 0) {
      j = lps[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j += 1;
    }
    lps[i] = j;
  }
  
  // find all occurences of pattern in text and put it on results[]
  const results = [];
  for (let i = 0, j = 0; i < text.length; i += 1) {
    if (text[i] === pattern[j]) {
      j += 1;
      if (j === pattern.length) {
        results.push((i + 1) - j);
        j = lps[j - 1];
      }
    } else if (j > 0) {
      j = lps[j - 1];
      i -= 1;
    }
  }

  return results;
}

module.exports = knuthMorrisPratt;
