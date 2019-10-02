const knuthMorrisPratt = (text, pattern) => {
    // lps = the longest proper suffix of pat[0..i] which is also a prefix of pat[0..i]
    let lps = [0];

    // precompute lps[]
    for (let i = 1, j = 0; i < pattern.length; ++i) {
        while (j < i && pattern[i] !== pattern[j] && j > 0)
            j = lps[j-1];
        if (pattern[i] === pattern[j])
            ++j;
        lps[i] = j;
    }
    
    // find all occurences of pattern in text and put it on results[]
    let results = [];
    for (let i = 0, j = 0; i < text.length; ++i) {
        if (text[i] === pattern[j]) {
            ++j;
            if (j === pattern.length) {
                results.push(i+1-j);
                j = lps[j-1];
            }
        } else if (j > 0) {
            j = lps[j-1];
            --i;
        }
    }

    return results;
}

module.exports = knuthMorrisPratt;
