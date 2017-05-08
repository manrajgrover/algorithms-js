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

  _heapify(index) {
    const left = this._left(index);
    const right = this._right(index);

    let heapIndex = index;

    if (left < this._length && this._compareFunction(this._list[left], this._list[index])) {
      heapIndex = left;
    }
    if (right < this._length && this._compareFunction(this._list[right], this._list[heapIndex])) {
      heapIndex = right;
    }

    if (heapIndex !== index) {
      this._swap(index, heapIndex);
      this._heapify(heapIndex);
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  top() {
    if (this._length === 0) {
      return null;
    }
    return this._list[0];
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
