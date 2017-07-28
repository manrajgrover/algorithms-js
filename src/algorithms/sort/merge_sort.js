class MergeSort {
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
   * Merges the two array in sorted order
   * @param  {Array} leftList  Left array
   * @param  {Array} rightList Right array
   * @return {Array}           Merged array
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
   */
  _sort(list) {
    list = this._mergeSort(list);
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

module.exports = MergeSort;
