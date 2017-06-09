class Node {
  constructor(char) {
    this._isLeaf = false;
    this._children = {};
    this._data = char;
  }
}

class Trie {
  constructor() {
    this._root = new Node('');
  }
}

module.exports = Trie;
