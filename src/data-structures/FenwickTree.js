class FenwickTree {
  constructor(array) {
    this._list = array;
    this._list.fill(0);
    this._length = this._list.length;
    this._buildTree(array);
  }

  get size() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
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

  _buildTree(array) {
    if (!Array.isArray(array)) {
      throw new Error('Array needs to be passed in order to build the tree');
    }

    for (let i = 0; i < this._length; i += 1) {
      this.updateTree(i, array[i]);
    }
  }
}

module.exports = FenwickTree;
