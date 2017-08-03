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

/**
 * Class for Trie
 */
class Trie {
  constructor() {
    /** @private */
    this._root = new Node();
    /** @private */
    this._size = 0;
  }

  /**
   * Get size of Trie
   * @return {Number} Size of Trie
   * @public
   */
  get size() {
    return this._size;
  }

  /**
   * Checks if trie is empty or not
   * @return {Boolean} true if empty else false
   * @public
   */
  isEmpty() {
    return Object.keys(this._root.children).length === 0;
  }

  /**
   * Inserts data into trie
   * @param  {String} data String to be inserted
   * @param  {*} val       Leaf node value
   * @return {Node}        Inserted node in trie
   * @public
   */
  insert(data, val = undefined) {
    let crawler = this._root;

    for (let i = 0; i < data.length; i += 1) {
      let child = crawler.children[data[i]];

      if (child === undefined) {
        child = new Node();
        crawler.children[data[i]] = child;
      }

      crawler = child;
    }

    this._size += 1;
    crawler.isLeaf = true;
    crawler.data = val;

    return crawler;
  }

  /**
   * Searches and returns whether word exists in trie
   * @param  {String} data  Data to be searched
   * @return {*}            val of leaf node, if exist else false
   * @public
   */
  search(data) {
    let crawler = this._root;

    for (let i = 0; i < data.length; i += 1) {
      const child = crawler.children[data[i]];

      if (child === undefined) {
        return -1;
      }

      crawler = child;
    }

    if (crawler !== undefined && crawler.isLeaf) {
      return crawler.data;
    }

    return -1;
  }

  /**
   * Recursively deletes word from the trie
   * @param  {Node}    node   Current node being explored
   * @param  {String}  data   Word to be deleted
   * @param  {Integer} level  Depth looked in trie
   * @param  {Integer} length Length of word
   * @return {Boolean}        true if deleted else false
   * @private
   */
  _remove(node, data, level, length) {
    if (node && level === length && node.isLeaf) {
      node.isLeaf = false;

      if (Object.keys(node.children).length === 0) {
        return true;
      }

      return false;
    }

    const index = data[level];

    if (this._remove(node.children[index], data, level + 1, length)) {
      delete node.children[index];

      return (!node.isLeaf && Object.keys(node.children).length === 0);
    }

    return false;
  }

  /**
   * Word to be deleted
   * @param  {String} data  Word to be deleted
   * @return {Boolean}      true if deleted else false
   * @private
   */
  delete(data) {
    if (this.search(data) !== -1) {
      this._size -= 1;
      return this._remove(this._root, data, 0, data.length);
    }
    return false;
  }
}

module.exports = Trie;
