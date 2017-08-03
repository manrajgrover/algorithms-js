/**
 * Class for Insertion Sort for an array
 */
class InsertionSort {
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
   * Insertion Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const len = list.length;

    for (let i = 1; i < len; i += 1) {
      let j = i - 1;
      const key = list[i];

      while (j >= 0 && this._compareFunc(key, list[j])) {
        list[j + 1] = list[j];
        j -= 1;
      }
      list[j + 1] = key;
    }

    return list;
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

module.exports = InsertionSort;
