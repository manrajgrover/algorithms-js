const DoublyLinkedList = require('./DoublyLinkedList');

class Queue {
  constructor() {
    this._list = new DoublyLinkedList();
  }
}

module.exports = Queue;
