class Node {
  constructor(data) {
    this._isLeaf = false;
    this._children = {};
    this._data = data;
  }
  }
}

class Trie {
  constructor() {
    this._root = new Node('');
  }
}

module.exports = Trie;
