const DoublyLinkedList = require('./DoublyLinkedList');

class Queue {
  constructor() {
    this._list = new DoublyLinkedList();
  }

  /**
   * Get length of Queue
   * @return {Number} Size of Queue
   */
  get size() {
    return this._list.length;
  }

  /**
   * Check if Queue is empty or not
   * @return {Boolean} `true` if empty else `false`
   */
  isEmpty() {
    return this._list.isEmpty();
  }

}

module.exports = Queue;
