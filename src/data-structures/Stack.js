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

  /**
   * Check if Stack is empty or not
   * @return {Boolean} `true` if empty else `false`
   */
  isEmpty() {
    return this._list.isEmpty();
  }

}

module.exports = Stack;
