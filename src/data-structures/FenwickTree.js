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

  updateTree(index = 0, element = 0) {
    index += 1;

    while (index <= this._length) {
      this._list[index] += element;
      index += (index & (-index));
    }
  }
}

module.exports = FenwickTree;
