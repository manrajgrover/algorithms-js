const DoublyLinkedList = require('./DoublyLinkedList');

class Stack {
  constructor() {
    this._list = new DoublyLinkedList();
  }
}

module.exports = Stack;
