/**
 * Class for the Shell Sort algorithm
 */
class ShellSort {
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
   * Shell Sort
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const arr = list;
    const len = arr.length;
    for (let i = parseInt(len / 2, 10); i > 0; i = parseInt(i / 2, 10)) {
      for (let e = i; e < len; e += 1) {
        const temp = arr[e];
        let j;
        for (j = e; j >= i && arr[j - i] > temp; j -= i) {
          arr[j] = arr[j - i];
        }
        arr[j] = temp;
      }
    }
    return this._reverse ? arr.reverse() : arr;
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

module.exports = ShellSort;
