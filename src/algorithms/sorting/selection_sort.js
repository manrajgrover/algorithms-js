class SelectionSort {
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
   * Selection Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
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
   */
  toString() {
    return this._sortedList.join(', ');
  }
}

module.exports = SelectionSort;
