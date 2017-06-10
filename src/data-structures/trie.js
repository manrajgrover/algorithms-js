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
    this._root = new Node('');
  }
}

module.exports = Trie;
