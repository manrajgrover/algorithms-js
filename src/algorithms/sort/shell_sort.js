/**
 * Class for Shell Sort for an array
 */
class ShellSort {
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
     * Shell Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    _sort(list) {
        const len = list.length;

        for (var space = len; space > 0; space = parseInt(space / 2)) {
            for (var i = space; i < len; i++) {
                var k = list[i];
                for (var j = i; j >= space && this._compareFunc(k, list[j - space]); j -= space){
                    list[j] = list[j - space];
                }
                list[j] = k;
            }
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
  
  module.exports = ShellSort;
  