const DoublyLinkedList = require('./DoublyLinkedList');

class Stack {
  constructor() {
    this._list = new DoublyLinkedList();
  }

  /**
   * Get length of Stack
   * @return {Number} Size of Stack
   */
  get size() {
    return this._list.length;
  }
}

module.exports = Stack;
