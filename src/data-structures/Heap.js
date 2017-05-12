class Heap {
  constructor(data = [], compareFunc = (a, b) => a < b) {
    this._list = [];
    this._length = 0;
    this._compareFunc = compareFunc;
    if (data.length !== 0) {
      this._buildHeap(data);
    }
  }

  get size() {
    return this._length;
  }

  _buildHeap(data) {
    data.forEach((val) => {
      this.push(val);
    });
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _left(index) {
    return (2 * index) + 1;
  }

  _right(index) {
    return (2 * index) + 2;
  }

  _swap(x, y) {
    [this._list[x], this._list[y]] = [this._list[y], this._list[x]];
  }

  _heapify(index) {
    const left = this._left(index);
    const right = this._right(index);

    let heapIndex = index;

    if (left < this._length && this._compareFunc(this._list[left], this._list[index])) {
      heapIndex = left;
    }

    if (right < this._length && this._compareFunc(this._list[right], this._list[heapIndex])) {
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
    let elemIndex = this._length;

    this._length += 1;
    this._list.push(element);

    while (elemIndex !== 0 &&
        this._compareFunc(this._list[elemIndex], this._list[this._parent(elemIndex)])) {
      this._swap(this._parent(elemIndex), elemIndex);
      elemIndex = this._parent(elemIndex);
    }
  }

  pop() {
    if (this._length <= 0) {
      throw new Error('Heap is empty');
    }

    if (this._length === 1) {
      this._length -= 1;
      this._list.pop();
      return this._list[0];
    }

    const top = this._list[0];
    this._list[0] = this._list[this._length - 1];
    this._list.pop();
    this._length -= 1;
    this._heapify(0);

    return top;
  }
}

module.exports = Heap;
