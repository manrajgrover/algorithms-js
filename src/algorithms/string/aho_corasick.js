// From https://github.com/BrunoRB/ahocorasick

const AhoCorasick = function (keywords) {
  this._buildTables(keywords);
};

AhoCorasick.prototype._buildTables = function (keywords) {
  const gotoFn = {
    0: {}
  };
  const output = {};

  let state = 0;
  keywords.forEach((word) => {
    let curr = 0;
    for (let i = 0; i < word.length; i++) {
      const l = word[i];
      if (gotoFn[curr] && l in gotoFn[curr]) {
        curr = gotoFn[curr][l];
      } else {
        state++;
        gotoFn[curr][l] = state;
        gotoFn[state] = {};
        curr = state;
        output[state] = [];
      }
    }

    output[curr].push(word);
  });

  const failure = {};
  const xs = [];

  // f(s) = 0 for all states of depth 1 (the ones from which the 0 state can transition to)
  for (const l in gotoFn[0]) {
    const state = gotoFn[0][l];
    failure[state] = 0;
    xs.push(state);
  }

  while (xs.length) {
    const r = xs.shift();
    // for each symbol a such that g(r, a) = s
    for (const l in gotoFn[r]) {
      const s = gotoFn[r][l];
      xs.push(s);

      // set state = f(r)
      let state = failure[r];
      while (state > 0 && !(l in gotoFn[state])) {
        state = failure[state];
      }

      if (l in gotoFn[state]) {
        const fs = gotoFn[state][l];
        failure[s] = fs;
        output[s] = output[s].concat(output[fs]);
      } else {
        failure[s] = 0;
      }
    }
  }

  this.gotoFn = gotoFn;
  this.output = output;
  this.failure = failure;
};

AhoCorasick.prototype.search = function (string) {
  let state = 0;
  const results = [];
  for (let i = 0; i < string.length; i++) {
    const l = string[i];
    while (state > 0 && !(l in this.gotoFn[state])) {
      state = this.failure[state];
    }
    if (!(l in this.gotoFn[state])) {
      continue;
    }

    state = this.gotoFn[state][l];

    if (this.output[state].length) {
      const foundStrs = this.output[state];
      results.push([i, foundStrs]);
    }
  }

  return results;
};

module.exports = AhoCorasick;
