class BubbleSort {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    this._list = data;
    this._compareFunc = compareFunc;
  }

  get size() {
    return this._list.length;
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

    data.forEach((val, index, array) => {
      console.log(val, index, array);
    });
  }
}

module.exports = BubbleSort;
