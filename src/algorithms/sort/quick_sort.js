/**
 * Class for Quick Sorting an array
 */
class QuickSort {
  constructor(data = [], compareFunc = (a, b) => a <= b) {
    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice(), 0, data.length - 1);
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
   * Create a partition and sort the individual parts
   * @param  {Array}  list List to be sorted
   * @param  {Number} low  Left index
   * @param  {Number} high Right index
   * @return {List}        List containing sorted list and partition index
   * @private
   */
  _partition(list, low, high) {
    const pivot = list[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j += 1) {
      if (this._compareFunc(list[j], pivot)) {
        i += 1;
        [list[i], list[j]] = [list[j], list[i]];
      }
    }

    [list[i + 1], list[high]] = [list[high], list[i + 1]];
    return [list, i + 1];
  }

  /**
   * Recursive function to create partition and sort the halves
   * @param  {Array}  list List to be sorted
   * @param  {Number} low  Left index
   * @param  {Number} high Right index
   * @return {List}        Sorted list
   * @private
   */
  _quickSort(list, low, high) {
    if (low < high) {
      const [sortedlist, pi] = this._partition(list, low, high);

      this._quickSort(sortedlist, low, pi - 1);
      this._quickSort(sortedlist, pi + 1, high);
    }

    return list;
  }

  /**
   * Quick sorts the array
   * @param  {Array}  list Unsorted List
   * @param  {Number} low  Left index
   * @param  {Number} high Right index
   * @return {Array}       Sorted list
   * @private
   */
  _sort(list, low, high) {
    list = this._quickSort(list, low, high);
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

module.exports = QuickSort;
