const DoublyLinkedList = require('./doubly_linked_list');

/**
 * Class for LRUCache
 */
class LRUCache {
  /**
     *
     * @param {Number} max max size of the cache, in units determined by sizef
     * @param {Function} [sizef = () => 1] function to determine the size of an object.
     *   By default, all objects are size 1
     */
  constructor(max = Infinity, sizef = () => 1) {
    this._max = max;
    this._size = 0;
    this._sizef = sizef;

    this._oqueue = new DoublyLinkedList();
    this._omap = {};
  }

  /** insert a key/value pair into the cache
     *  new entries are always prioritized over old entries
     *  entries too large to fit in the entire cache
     *    (even alone) are rejected and undefined is returned
     *
     * @param {*} k
     * @param {*} v
     * @return {Boolean} true if insert was successful, false if entry was:
     *   * too large
     *   * a duplicate key
     */
  insert(k, v) {
    k = `${k}`;
    const osize = this._sizef(v);
    if (osize > this._max) {
      return false;
    }

    if (Object.keys(this._omap).includes(k)) {
      return false;
    }

    while (this._size + osize > this._max) {
      const dkey = this._oqueue.pop().value;
      this._size -= this._omap[dkey]._size;
      delete this._omap[dkey];
    }
    this._oqueue.push(k);
    this._omap[k] = {
      _size: osize,
      val: v,
      node: this._oqueue.head
    };
    this._size += osize;
    return true;
  }

  /**
     * get an item from the cache
     * @param {*} k the key whose value is desired
     * @return {*} the value of the desired key, or undefined if the key was
     *   not in the cache
     */
  get(k) {
    const v = this._omap[k];
    if (v === undefined) {
      return undefined;
    }
    this._oqueue.deleteNode(v.node);
    this._oqueue.push(k);
    v.node = this._oqueue.head;
    return v.val;
  }

  /**
   * get the current size of the cache
   */
  get size() {
    return this._size;
  }

  toString() {
    return `${JSON.stringify(this._omap)}\n${this._oqueue.toString()}`;
  }
}


module.exports = LRUCache;
