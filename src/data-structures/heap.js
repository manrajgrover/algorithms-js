/**
 * Class for Heaps
 */
class Heap {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    /** @private */
    this._list = [];
    /** @private */
    this._length = 0;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._buildHeap(data);
  }

  /**
   * Get size of Heap
   * @return {Number} Size of Heap
   * @public
   */
  get size() {
    return this._length;
  }

  /**
   * Build Heap
   * @param  {*} data Single element or array of data to be used for Heap
   * @return {None}
   * @private
   */
  _buildHeap(data) {
    if (Array.isArray(data)) {
      data.forEach((val) => {
        this.push(val);
      });
    } else {
      this.push(data);
    }
  }

  /**
   * Get parent of index
   * @param  {Number} index Index for which parent is required
   * @return {Number}       Parent of index
   * @private
   */
  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Get index of left node
   * @param  {Number} index Index for which left node index is needed
   * @return {Number}       Index of left node
   * @private
   */
  _left(index) {
    return (2 * index) + 1;
  }

  /**
   * Get index of right node
   * @param  {Number} index Index for which right node index is needed
   * @return {Number}       Index of right node
   * @private
   */
  _right(index) {
    return (2 * index) + 2;
  }

  /**
   * Swap nodes
   * @param  {Number} x Index of node one
   * @param  {Number} y Index of node two
   * @return {None}
   * @private
   */
  _swap(x, y) {
    [this._list[x], this._list[y]] = [this._list[y], this._list[x]];
  }

  /**
   * Heapifies the array
   * @param  {Number} index Index of root
   * @return {None}
   * @private
   */
  _heapify(index) {
    const left = this._left(index);
    const right = this._right(index);

    let heapIndex = index;

    if (left < this._length && this._compareFunc(this._list[left], this._list[index])) {
      heapIndex = left;
    }

    if (right < this._length && this._compareFunc(this._list[right], this._list[heapIndex])) {
      heapIndex = right;
    }

    if (heapIndex !== index) {
      this._swap(index, heapIndex);
      this._heapify(heapIndex);
    }
  }

  /**
   * Whether Heap is empty
   * @return {Boolean} Whether Heap is empty or not
   * @public
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Get top of Heap
   * @return {*} Top value of Heap
   * @public
   */
  top() {
    if (this._length === 0) {
      return null;
    }

    return this._list[0];
  }

  /**
   * Pushes node to the Heap
   * @param  {*} element Value to be inserted
   * @return {None}
   * @public
   */
  push(element) {
    let elemIndex = this._length;

    this._length += 1;
    this._list.push(element);

    while (elemIndex !== 0 &&
        this._compareFunc(this._list[elemIndex], this._list[this._parent(elemIndex)])) {
      this._swap(this._parent(elemIndex), elemIndex);
      elemIndex = this._parent(elemIndex);
    }
  }

  /**
   * Pop node from the Heap
   * @return {*} Top popped node from the Heap
   * @public
   */
  pop() {
    if (this._length <= 0) {
      throw new Error('Heap is empty');
    }

    if (this._length === 1) {
      this._length -= 1;
      this._list.pop();
      return this._list[0];
    }

    const top = this._list[0];
    this._list[0] = this._list[this._length - 1];
    this._list.pop();
    this._length -= 1;
    this._heapify(0);

    return top;
  }
}

module.exports = Heap;
