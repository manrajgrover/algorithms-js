class Node {
  constructor(data) {
    this._value = data;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set value(data) {
    this._value = data;
  }

  set next(node) {
    this._next = node;
  }
}

module.exports = Node;
