const DoublyLinkedList = require('./doubly_linked_list');

/**
 * Class for Stacks
 */
class Stack {
  constructor(data) {
    /** @private */
    this._list = new DoublyLinkedList();
    if (data !== undefined) {
      this.push(data);
    }
  }

  /**
   * Get length of Stack
   * @return {Number} Size of Stack
   * @public
   */
  get size() {
    return this._list.length;
  }

  /**
   * Check if Stack is empty or not
   * @return {Boolean} `true` if empty else `false`
   * @public
   */
  isEmpty() {
    return this._list.isEmpty();
  }

  /**
   * Pushes node in Stack
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
   * Pop node from Stack
   * @return {*} Value of node which was popped
   * @public
   */
  pop() {
    return this._list.pop().value;
  }

  /**
   * Get top value on stack
   * @return {*} Value of node at the top
   * @public
   */
  top() {
    const top = this._list.head;
    return top.value;
  }
}

module.exports = Stack;
