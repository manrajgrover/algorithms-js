class FenwickTree {
  constructor(length) {
    this._list = new Array(length + 1);
    this._list.fill(0);
    this._length = this._list.length;
  }

  get size() {
    return this._length - 1;
  }

  buildTree(array) {
    if (!Array.isArray(array)) {
      throw new Error('Array needs to be passed in order to build the tree');
    }

    for (let i = 0; i < this._length; i += 1) {
      this.updateTree(i, array[i]);
    }
  }

  isEmpty() {
    return (this._length - 1) === 0;
  }

  getSum(index = 0) {
    if (index + 1 >= (this._length)) {
      throw new RangeError('Index out of bound');
    }
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

  rangeSum(left, right) {
    if (left > right) {
      [left, right] = [right, left];
    }
    return this.getSum(right) - this.getSum(left - 1);
  }
}

module.exports = FenwickTree;
