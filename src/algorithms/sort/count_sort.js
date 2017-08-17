/**
 * Class for Count Sorting an array
 */
class CountSort {
  constructor(data = [], reverse = false) {
    /** @private */
    this._unsortedList = data;
    /** @private */
    this._reverse = reverse;
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
   * Count Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const len = list.length;

    const range = Math.max(...list);

    if (range === -Infinity) {
      return list;
    }

    const count = new Array(range + 1);
    const output = new Array(len);
    count.fill(0);

    for (let i = 0; i < len; i += 1) {
      count[list[i]] += 1;
    }

    for (let i = 1; i <= range; i += 1) {
      count[i] += count[i - 1];
    }

    for (let i = 0; i < len; i += 1) {
      output[count[list[i]] - 1] = list[i];
      count[list[i]] -= 1;
    }

    for (let i = 0; i < len; i += 1) {
      list[i] = output[i];
    }

    return this._reverse ? list.reverse() : list;
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

module.exports = CountSort;
