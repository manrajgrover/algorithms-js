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

  /**
   * Pushes node in Queue
   * @param  {*}   data Data or value to be pushed
   * @return {None}
   */
  push(data) {
    this._list.push(data);
  }

}

module.exports = Queue;
