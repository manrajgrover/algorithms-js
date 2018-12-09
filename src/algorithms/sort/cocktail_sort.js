/**
 * Class for the Cocktail Sort algorithm
 */
class CocktailSort {
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
   * Cocktail sort
   * @param  {Array} list Array to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    const arr = list;
    const len = arr.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
      let newRight = right - 1;
      for (let i = left; i + 1 <= right; i += 1) {
        if (arr[i + 1] < arr[i]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          newRight = i;
        }
      }
      right = newRight;
      let newLeft = left + 1;
      for (let i = right; i - 1 >= left; i -= 1) {
        if (arr[i] < arr[i - 1]) {
          const temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          newLeft = i;
        }
      }
      left = newLeft;
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

module.exports = CocktailSort;
