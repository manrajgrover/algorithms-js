const Node = require('./Node');

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this._head === null) {
      this._head = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }

    this._length += 1;
    return this;
  }

  forEach(func) {
    let reference = this._head;

    while (reference !== null) {
      reference.value = func(reference.value);
      reference = reference.next;
    }
  }

  pop() {
    if (this._head === null) {
      throw new Error('There are no nodes to pop from the list');
    }

    this._head = this._head.next;
    this._length -= 1;
  }

  toString() {
    let reference = this._head;
    let str = '';

    while (reference !== null) {
      str += `${reference.value} -> `;
      reference = reference.next;
    }

    str += 'null';

    return str;
  }
}


module.exports = LinkedList;
