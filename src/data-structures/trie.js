class Node {
  constructor(data) {
    this._isLeaf = false;
    this._children = {};
    this._data = data;
  }

  get isLeaf() {
    return this._isLeaf;
  }

  set isLeaf(val) {
    this._isLeaf = val;
  }

  get children() {
    return this._children;
  }

  get data() {
    return this._data;
  }

  set data(val) {
    this._data = val;
  }
}

class Trie {
  constructor() {
    this._root = new Node();
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return Object.keys(this._root.children).length === 0;
  }
  }
}

module.exports = Trie;
