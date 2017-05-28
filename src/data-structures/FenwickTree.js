class FenwickTree {
  constructor(length) {
    this._list = new Array(length + 1);
    this._list.fill(0);
    this._length = this._list.length;
  }

  /**
   * Get size of Fenwick Tree
   * @return {Number} Size of Fenwick Tree
   */
  get size() {
    return this._length - 1;
  }

  /**
   * Builds Fenwick Tree
   * @param  {Array} array Array elements to be used to build the tree
   * @return {None}
   */
  buildTree(array) {
    if (!Array.isArray(array)) {
      throw new Error('Array needs to be passed in order to build the tree');
    }

    for (let i = 0; i < this._length; i += 1) {
      this.updateTree(i, array[i]);
    }
  }

  /**
   * Check if tree is empty
   * @return {Boolean} Returns true if empty else false
   */
  isEmpty() {
    return (this._length - 1) === 0;
  }

  /**
   * Gets prefix sum of the array using the tree
   * @param  {Number} index Index till which sum needs to be calculated
   * @return {Number}       Prefix sum
   */
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

  /**
   * Updates the tree with adding element to given index
   * @param  {Number} index   Index of element to be updated
   * @param  {Number} element Element to be added
   * @return {None}
   */
  updateTree(index = 0, element = 0) {
    index += 1;

    while (index <= this._length) {
      this._list[index] += element;
      index += (index & (-index));
    }
  }

  /**
   * Calculates range sum from given index to given index
   * @param  {Number} left  Left index
   * @param  {Number} right Right index
   * @return {Number}       Range sum
   */
  rangeSum(left, right) {
    if (left > right) {
      [left, right] = [right, left];
    }
    return this.getSum(right) - this.getSum(left - 1);
  }
}

module.exports = FenwickTree;
