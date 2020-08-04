function fibRecursive(n) {
  if (n < 2) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}


module.exports = fibRecursive;
