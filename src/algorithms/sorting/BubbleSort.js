class BubbleSort {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    this._list = data;
    this._compareFunc = compareFunc;
  }

  get size() {
    return this._list.length;
  }

  sort() {
    const data = this._list;

    data.forEach((val, index, array) => {
      console.log(val, index, array);
    });
  }
}

module.exports = BubbleSort;
