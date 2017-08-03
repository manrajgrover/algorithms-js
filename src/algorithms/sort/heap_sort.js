const Heap = require('../../data-structures/heap');

/**
 * Class for Heap Sorting an array
 */
class HeapSort {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */
  get size() {
    return this._length;
  }

  /**
   * Get unsorted array
   * @return {Array} Unsorted/Initial array
   * @public
   */
  get unsortedList() {
    return this._unsortedList;
  }

  /**
   * Get sorted array
   * @return {Array} Sorted array
   * @public
   */
  get sortedList() {
    return this._sortedList;
  }

  /**
   * Heap Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const result = [];
    const heap = new Heap(list, this._compareFunc);

    while (!heap.isEmpty()) {
      result.push(heap.top());
      heap.pop();
    }

    return result;
  }

  /**
   * Get string form of array
   * @return {String} Comma separated string array
   * @public
   */
  toString() {
    return this._sortedList.join(', ');
  }
}

module.exports = HeapSort;
