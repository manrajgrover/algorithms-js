/**
 * Binary Search Tree (BST) implementation
 * data has to be unique
 * */
class BSTNode {
  /**
   * Constructor of BSTNode.
   * Constructs node with given value and null left and right child.
   * @param {*} value any value, intended to be stored in a node
   * @constructor
   * */
  constructor(value) {
    /** @private */
    this._value = value;
    /** @privates */
    this._left = null;
    /** @privates */
    this._right = null;
  }

  /**
   * Insert inserts value into bst, correct place
   * @param {*} value value to be inserted in bst
   * @return {boolean} true if value has been inserted. False if value exists.
   * */
  insert(value) {
    // value exists, return false, base case
    if (this._value === value) return false;
    // value is smaller, add to the left
    if (this._value > value) {
      if (this._left != null) return this._left.insert(value);
      // If smaller value doesn't exist, put current in left
      this._left = new BSTNode(value);
      return true;
    }
    // Given value is more than node's value
    if (this._right != null) return this._right.insert(value);
    // Put it in the right
    this._right = new BSTNode(value);
    return true;
  }

  /**
   * contains checks if a given value exists in bst, where root is this node.
   * @param {*} value which needs to be checked
   * @return {boolean} true if bst contains value
   * */
  contains(value) {
    // Base case
    if (this._value === value) return true;
    if (this._value > value && this._left != null) {
      return this._left.contains(value);
    }
    if (this._value < value && this._right != null) {
      return this._right.contains(value);
    }
    return false;
  }

  /**
   * minValue finds minimum value in sub-trees
   * @return minimal value in sub-trees
   * */
  minValue() {
    let minNode = this;
    while (minNode._left != null) {
      minNode = minNode._left;
    }
    return minNode._value;
  }
}


/**
 * Implementation of binary search trees, with unique values
 * */
class BST {
  /**
   * Construct an empty BST structure
   * @constructor
   * */
  constructor() {
    /** @private {BSTNode} */
    this._root = null;
    /** @private {number} */
    this._size = 0;
  }
  /**
   * Insert value in BST in correct place.
   * @param {*} value to insert
   * @return {boolean} true if value has been inserted into bst
   * */
  insert(value) {
    if (this._root != null) {
      const inserted = this._root.insert(value);
      if (inserted) this._size += 1;
      return inserted;
    }
    this._size += 1;
    this._root = new BSTNode(value);
    return true;
  }

  /**
   * contains returns true if value exists in BST
   * @param {*} value to check
   * @return {boolean} true if value exists in bst
   * */
  contains(value) {
    if (this._root != null) return this._root.contains(value);
    return false;
  }

  /**
   * delete deletes value from binary search tree
   * @param {*} value to delete
   * @return {boolean} true if value has been deleted
   * */
  delete(value) {
    let hasBeenDeleted = false;
    //  takes bst root and value
    //  deletes node with given value and returns new root
    const deleteNode = (root, val) => {
      if (root === null) return null;
      if (root._value > val) { // Delete to the left
        root._left = deleteNode(root._left, val);
      } else if (root._value < val) { // Delete to the right
        root._right = deleteNode(root._right, val);
      } else { // this (root) node should be deleted
        hasBeenDeleted = true;
        // Has no children
        if (root._left === null && root._right === null) return null;
        // might only need to attach right child
        if (root._left === null) return root._right;
        // need to attach left child
        if (root._right === null) return root._left;
        // Has both child. So we take smallest in right side
        // And replace root with that
        root._value = root._right.minValue();
        // Delete from right
        root._right = deleteNode(root._right, root._value);
        return root;
      }
      return null;
    };
    this._root = deleteNode(this._root, value);

    if (hasBeenDeleted) this._size -= 1;
    return hasBeenDeleted;
  }

  /**
   * minValue returns minimum value in the tree
   * @return {*} minimum value in bst
   * */
  minValue() {
    if (this._root === null) return null;
    return this._root.minValue();
  }

  /**
   * size returns number of elements in bst
   * @return {number} size of bst
   * */
  size() {
    return this._size;
  }

  /**
   * @return true if bst consists of 0 elements
   * */
  isEmpty() {
    return this._root === null;
  }

  /**
   * inorderTraversal
   * @return array of all bst element sorted increasingly
   * */
  inorderTraversal() {
    const arr = [];
    const traverser = (a, node) => {
      if (node === null) return;
      traverser(a, node._left);
      a.push(node._value);
      traverser(a, node._right);
    };
    traverser(arr, this._root);
    return arr;
  }

  /**
   * reverseOrderTraversal returns array of all bst element sorted from large to small
   * @return array of all bst element sorted decreasingly
   * */
  reverseOrderTraversal() {
    const arr = [];
    const traverser = (a, node) => {
      if (node === null) return;
      traverser(a, node._right);
      a.push(node._value);
      traverser(a, node._left);
    };
    traverser(arr, this._root);
    return arr;
  }
}

module.exports = BST;
