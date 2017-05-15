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

  toString() {
    return this._sortedList.join(', ');
  }
}

module.exports = SelectionSort;
