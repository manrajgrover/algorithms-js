function validTraingle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return false;
  }
    return true;
}

module.exports = validTraingle;
