class FenwickTree {
  constructor(length) {
    this._list = new Array(length + 1);
    this._list.fill(0);
    this._length = length;
  }

  getSum(index = 0) {
    let sum = 0;

    index += 1;

    while (index > 0) {
      sum += this._list[index];

      index -= (index & (-index));
    }

    return sum;
  }
}

module.exports = FenwickTree;
