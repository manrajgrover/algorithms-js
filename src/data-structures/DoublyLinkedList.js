const Node = require('./Node');
const deepStrictEqual = require('assert').deepStrictEqual;

class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Get length of Doubly Linked List
   * @return {Number} Length of Linked List
   */
  get length() {
    return this._length;
  }

  /**
   * Check if Doubly Linked List is empty or not
   * @return {Boolean} `true` if empty else `false`
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Pushes node to the front of Linked List
   * @param  {*} data Data or value contained in Node
   * @return {None}
   */
  push(data) {
    const newNode = new Node(data);

    newNode.next = this._head;
    newNode.prev = null;

    if (this._head !== null) {
      this._head.prev = newNode;
    }

    this._head = newNode;
    this._length += 1;
  }

  /**
   * Inserts node after a given node
   * @param  {Node} prevNode Node after which insertion needs to take place
   * @param  {*}    data     Data or value contained in Node
   * @return {None}
   */
  static insertAfter(prevNode, data) {
    if (prevNode === null) {
      throw new Error('Previous node cannot be null');
    }

    const newNode = new Node(data);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    }
  }
}

module.exports = DoublyLinkedList;
