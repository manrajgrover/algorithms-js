class Heap {
  constructor(compareFunction) {
    this._list = [];
    this._length = 0;
    this._compareFunction = compareFunction;
  }

  get size() {
    return this._length;
  }

  _parent(index) {
    return (index / 2);
  }

  _left(index) {
    return index * 2;
  }

  _right(index) {
    return (index * 2) + 1;
  }

  _swap(x, y) {
    [this._list[x], this._list[y]] = [this._list[y], this._list[x]];
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element) {
    this._length += 1;
    this._list.push(element);

    let elemIndex = this._length - 1;

    while (elemIndex !== 0 && this._list[this._parent(elemIndex)] > this._list[elemIndex]) {
      this._swap(this._parent(elemIndex), elemIndex);
      elemIndex = this._parent(elemIndex);
    }
  }
}

module.exports = Heap;
