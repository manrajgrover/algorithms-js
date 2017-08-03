/**
 * Class for Merge Sorting an array
 */
class MergeSort {
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
   * Merges the two array in sorted order
   * @param  {Array} leftList  Left array
   * @param  {Array} rightList Right array
   * @return {Array}           Merged array
   * @private
   */
  _merge(leftList, rightList) {
    let i = 0;
    let j = 0;

    const resultList = [];

    while (i < leftList.length && j < rightList.length) {
      if (this._compareFunc(leftList[i], rightList[j])) {
        resultList.push(leftList[i]);
        i += 1;
      } else {
        resultList.push(rightList[j]);
        j += 1;
      }
    }

    return resultList.concat((i < leftList.length ? leftList.slice(i) : rightList.slice(j)));
  }

  /**
   * Recursive function to divide array into two halves and merge the sorted array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted Array
   * @private
   */
  _mergeSort(list) {
    if (list.length > 1) {
      const middle = list.length >> 1;

      const leftList = this._mergeSort(list.slice(0, middle));
      const rightList = this._mergeSort(list.slice(middle));

      list = this._merge(leftList, rightList);
    }

    return list;
  }

  /**
   * Merge Sorts the array
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    list = this._mergeSort(list);
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

module.exports = MergeSort;
