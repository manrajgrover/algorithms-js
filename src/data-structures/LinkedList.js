const Node = require('./Node');
const assert = require('assert');

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

  pop() {
    if (this._head === null) {
      throw new Error('There are no nodes to pop from the list');
    }

    this._head = this._head.next;
    this._length -= 1;
  }

  getNodeByIndex(index) {
    if (index < 0 || index >= this._length) {
      throw new RangeError('Index out of range');
    }

    let reference = this._head;

    for (let i = 1; i <= index; i += 1) {
      reference = reference.next;
    }

    return reference;
  }

  /**
   * Returns first occurance of node with given value
   * @param  {*}    value Value to be searched
   * @return {Node}       First occurance of node with given value else -1
   */
  getNodeByValue(value) {
    let reference = this._head;

    while (reference !== null) {
      try {
        assert.deepStrictEqual(reference.value, value);
        return reference;
      } catch (e) {
        reference = reference.next;
      }
    }

    return -1;
  }

  forEach(func) {
    let reference = this._head;

    while (reference !== null) {
      reference.value = func(reference.value);
      reference = reference.next;
    }
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
