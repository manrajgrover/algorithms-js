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

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  get length() {
    return this.length;
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

  printList() {
    let reference = this._head;

    while (reference !== null) {
      process.stdout.write(`${reference.value} -> `);
      reference = reference.next;
    }
    process.stdout.write('null');

    return this;
  }
}


module.exports = LinkedList;
