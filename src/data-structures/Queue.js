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

}

module.exports = Queue;
