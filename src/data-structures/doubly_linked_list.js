class Node {
  constructor(data) {
    this._value = data;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  get prev() {
    return this._prev;
  }

  set next(node) {
    this._next = node;
  }

  set prev(node) {
    this._prev = node;
  }
}

/**
 * Class for Doubly Linked List
 */
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
   * Get tail of Doubly Linked List
   * @return {Node} Tail node
   */
  get tail() {
    return this._tail;
  }

  /**
   * Get head of Doubly Linked List
   * @return {Node} Head node
   */
  get head() {
    return this._head;
  }

  /**
   * Pushes node to the head of Doubly Linked List
   * @param  {*}   data Data or value contained in Node
   * @return {None}
   */
  push(data) {
    const newNode = new Node(data);

    if (this._head === null) {
      this._tail = newNode;
    }

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
    if (prevNode === null || prevNode === undefined) {
      throw new Error('Previous node cannot be null or undefined');
    }

    const newNode = new Node(data);

    if (prevNode.next === null) {
      this._tail = newNode;
    }

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
    if (node === null || node === undefined) {
      throw new Error('Node cannot be null or undefined');
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
   * @return {Node} Node popped
   */
  pop() {
    if (this._head === null) {
      throw new Error('No nodes to pop');
    }

    const reference = this._head;
    this._head = this._head.next;
    this._length -= 1;

    return reference;
  }

  /**
   * Delete node from the list
   * @param  {Node} node Node to be deleted
   * @return {None}
   */
  deleteNode(node) {
    if (node === null || node === undefined) {
      throw new Error('Node to be deleted cannot be null');
    }

    if (node === this._tail) {
      this._tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    if (node === this._head) {
      this._head = node.next;
    } else {
      node.prev.next = node.next;
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
   * @return {String} String representation of Doubly Linked List
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
