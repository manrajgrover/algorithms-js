const fibonacci = (n = 1) => {
  let mem = [0, 1];
  let i = 2;
  while (i <= n) {
    mem[i] = mem[i - 1] + mem[i - 2];
    i += 1
  }
  return mem[n];
};

module.exports = fibonacci;