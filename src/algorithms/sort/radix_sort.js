/**
 * Class for Count Sorting an array
 */
class RadixSort {
  constructor(data = []) {
    /** @private */
    this._unsortedList = data;
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
   * Get the digit at index i from an integer number
   * @param  {Number} num Number from which to extract the digit
   * @param  {Number} i Index from which to extract the digit
   * @return {Number} Extracted digit
   * @private
   */
  _getDigit(num, i) {
    // prettier-ignore
    return Math.floor(Math.abs(num) / (10 ** i)) % 10;
  }

  /**
   * Get the number of digits in an integer number
   * @param  {Number} num Number from which to count digits
   * @return {Number} Number of digits
   * @private
   */
  _getDigitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  /**
   * Given an array of integers, returns the number of digits in the largest number in the array
   * @param  {Array} nums Array of numbers
   * @return {Number} Largest number of digits in an integer found in the array
   * @private
   */
  _getMostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i += 1) {
      maxDigits = Math.max(maxDigits, this._getDigitCount(nums[i]));
    }
    return maxDigits;
  }

  /**
   * Radix Sorts the array
   * @param  {Array} list Array of integers to be sorted
   * @return {Array}      Sorted array
   * @private
   */
  _sort(list) {
    let nums = list;
    const maxDigitCount = this._getMostDigits(nums);
    for (let k = 0; k < maxDigitCount; k += 1) {
      const digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i += 1) {
        digitBuckets[this._getDigit(nums[i], k)].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
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

module.exports = RadixSort;
