class SelectionSort {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    this._unsortedList = data;
    this._compareFunc = compareFunc;

    this._sortedList = this._sort(data.slice());
    this._length = data.length;
  }

  get size() {
    return this._length;
  }

  get unsortedList() {
    return this._unsortedList;
  }

  get sortedList() {
    return this._sortedList;
  }
}

module.exports = SelectionSort;
