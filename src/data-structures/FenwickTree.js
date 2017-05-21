class FenwickTree {
  constructor(length) {
    this._list = new Array(length + 1);
    this._list.fill(0);
    this._length = length;
  }
}

module.exports = FenwickTree;
