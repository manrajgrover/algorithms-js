const Heap = require('../../data-structures/heap');

class HeapSort {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    this._unsortedList = data;
    this._compareFunc = compareFunc;

    this._sortedList = this._sort(data.slice());
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   */
  get size() {
    return this._length;
  }

  /**
   * Get unsorted array
   * @return {Array} Unsorted/Initial array
   */
  get unsortedList() {
    return this._unsortedList;
  }

  /**
   * Get sorted array
   * @return {Array} Sorted array
   */
  get sortedList() {
    return this._sortedList;
  }

  /**
   * Heap Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
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
   */
  toString() {
    return this._sortedList.join(', ');
  }
}

module.exports = HeapSort;
