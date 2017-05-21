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

  buildTree(array) {
    if (!Array.isArray(array)) {
      throw new Error('Array needs to be passed in order to build the tree');
    }

    const len = array.length;
    for (let i = 0; i < len; i += 1) {
      this.updateTree(i, array[i]);
    }
  }
}

module.exports = FenwickTree;
