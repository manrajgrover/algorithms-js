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

  /**
   * Pop node from Queue
   * @return {*} Value of node which was popped
   */
  pop() {
    const front = this._list.tail;
    this._list.deleteNode(front);

    return front.value;
  }

}

module.exports = Queue;
