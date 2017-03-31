const Node = require('./Node');
const deepStrictEqual = require('assert').deepStrictEqual;

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  /**
   * Get length of Linked List
   * @return {int} Length of Linked List
   */
  get length() {
    return this._length;
  }

  /**
   * Check if Linked List is empty or not
   * @return {Boolean} `true` if empty else `false`
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Pushes node to the end of Linked List
   * @param  {*}          data       Data or value contained in Node
   * @return {LinkedList}            `this`
   */
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

  /**
   * Pops node from the end of Linked List
   * @return {LinkedList} `this`
   */
  pop() {
    if (this._head === null) {
      throw new Error('There are no nodes to pop from the list');
    }

    this._head = this._head.next;
    this._length -= 1;

    return this;
  }

  /**
   * Pops node from particular place in Linked List
   * @param  {Number}     index Index of node from end of the list
   * @return {LinkedList}       `this`
   */
  popNodeByIndex(index) {
    if (index < 0 || index >= this._length) {
      throw new RangeError('Index out of range');
    }

    let reference = this._head;
    let previousNode = null;

    for (let i = 1; i <= index; i += 1) {
      previousNode = reference;
      reference = reference.next;
    }

    previousNode.next = reference.next;
    this._length -= 1;

    return this;
  }

  /**
   * Returns node at particular index else throws error if index out of range
   * @param  {Number} index Index of node from end
   * @return {Node}         Required node
   */
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
        deepStrictEqual(reference.value, value);
        return reference;
      } catch (e) {
        reference = reference.next;
      }
    }

    return -1;
  }

  /**
   * Returns Linked List as Array
   * @return {Array} Array containing values of Linked List
   */
  getListAsArray() {
    let reference = this._head;

    const list = [];

    while (reference !== null) {
      list.push(reference.value);
      reference = reference.next;
    }

    return list;
  }

  /**
   * Reverses Linked List
   * @return None
   */
  reverseList() {
    if (!this._head || !this._head.next) {
      return;
    }

    let curr = this._head;
    let next = null;
    let prev = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this._head = prev;
  }

  /**
   * Iterates over all nodes of linked list and runs function on the node value
   * @param  {func} func Function containing logic to be applied to node value
   * @return {None}
   */
  forEach(func) {
    let reference = this._head;

    while (reference !== null) {
      reference.value = func(reference.value);
      reference = reference.next;
    }

    return this;
  }

  /**
   * Returns string representing the linked list
   * @return {string} String representation of linked list
   */
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
