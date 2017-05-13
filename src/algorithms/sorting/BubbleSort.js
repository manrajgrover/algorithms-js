class BubbleSort {
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
    let didSwap;

    for (let i = 0; i < len - 1; i += 1) {
      didSwap = false;

      for (let j = 0; j < len - i - 1; j += 1) {
        if (this._compareFunc(list[j + 1], list[j])) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
          didSwap = true;
        }
      }

      if (!didSwap) {
        break;
      }
    }

    return list;
  }

  toString() {
    return this._sortedList.join(', ');
  }
}

module.exports = BubbleSort;
