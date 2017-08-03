/**
 * Class for Selection Sort for an array
 */
class SelectionSort {
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
   * Selection Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const len = list.length;

    for (let i = 0; i < len - 1; i += 1) {
      let minIndex = i;

      for (let j = i + 1; j < len; j += 1) {
        if (this._compareFunc(list[j], list[minIndex])) {
          minIndex = j;
        }
      }

      [list[i], list[minIndex]] = [list[minIndex], list[i]];
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

module.exports = SelectionSort;
