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

  }
}

class Trie {
  constructor() {
    this._root = new Node('');
  }
}

module.exports = Trie;
