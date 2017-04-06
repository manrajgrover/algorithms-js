const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this._head = null;
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
  insertAfter(prevNode, data) {
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

    this._length += 1;
  }

  /**
   * Inserts node before a given node
   * @param  {Node}  node Node before which insertion needs to take place
   * @param  {*}     data Data or value contained in Node
   * @return {Node}
   */
  insertBefore(node, data) {
    if (node === null) {
      throw new Error('Node cannot be null');
    }

    const newNode = new Node(data);

    newNode.prev = node.prev;
    node.prev = newNode;
    newNode.next = node;

    if (newNode.prev !== null) {
      newNode.prev.next = newNode;
    } else {
      this._head = newNode;
    }

    this._length += 1;
  }

  /**
   * Pop node from the head
   * @return {None}
   */
  pop() {
    if (this._head === null) {
      throw new Error('No nodes to pop');
    }

    this._head = this._head.next;
    this._length -= 1;
  }

  /**
   * Delete node from the list
   * @param  {Node} node Node to be deleted
   * @return {None}
   */
  deleteNode(node) {
    if (node === null) {
      throw new Error('Deleted node cannot be null');
    }

    if (node.prev === null) {
      this._head = node.next;
      node.next.prev = null;
    } else {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    this._length -= 1;
  }

  /**
   * Returns node at given index
   * @param  {Number} index Index of required node
   * @return {Node}         Required node
   */
  getNode(index) {
    if (index <= 0 || index > this._length) {
      throw new RangeError('Index out of range');
    }

    let reference = this._head;

    for (let i = 1; i < index; i += 1) {
      reference = reference.next;
    }

    return reference;
  }

  /**
   * Returns string representing the Doubly Linked List
   * @return {string} String representation of Doubly Linked List
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

module.exports = DoublyLinkedList;
