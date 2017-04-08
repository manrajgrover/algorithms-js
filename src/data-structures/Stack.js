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

  /**
   * Pushes node in Stack
   * @param  {*}   data Data or value to be pushed
   * @return {None}
   */
  push(data) {
    this._list.push(data);
  }

}

module.exports = Stack;
