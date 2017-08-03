const DoublyLinkedList = require('./doubly_linked_list');

/**
 * Class for Queues
 */
class Queue {
  constructor(data) {
    /** @private */
    this._list = new DoublyLinkedList();

    if (data !== undefined) {
      this.push(data);
    }
  }

  /**
   * Get length of Queue
   * @return {Number} Size of Queue
   * @public
   */
  get size() {
    return this._list.length;
  }

  /**
   * Check if Queue is empty or not
   * @return {Boolean} `true` if empty else `false`
   * @public
   */
  isEmpty() {
    return this._list.isEmpty();
  }

  /**
   * Pushes node in Queue
   * @param  {*}   data Data or value to be pushed
   * @return {None}
   * @public
   */
  push(data) {
    if (Array.isArray(data)) {
      data.forEach(val => this._list.push(val));
    } else {
      this._list.push(data);
    }
  }

  /**
   * Pop node from Queue
   * @return {*} Value of node which was popped
   * @public
   */
  pop() {
    const front = this._list.tail;
    this._list.deleteNode(front);

    return front.value;
  }

  /**
   * Get front value on Queue
   * @return {*} Value of node at the front
   * @public
   */
  front() {
    return this._list.tail.value;
  }

  /**
   * Get back value on Queue
   * @return {*} Value of node at the back
   * @public
   */
  back() {
    return this._list.head.value;
  }
}

module.exports = Queue;
