class Node {
  constructor(data) {
    this._value = data;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  get prev() {
    return this._prev;
  }

  set value(data) {
    this._value = data;
  }

  set next(node) {
    this._next = node;
  }

  set prev(node) {
    this._prev = node;
  }
}

module.exports = Node;
