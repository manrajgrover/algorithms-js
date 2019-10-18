/**
 * Class for the Doubly Linked List Node
 */
class DLLNode {
    constructor(key, value) {
        this._key = key;
        this._value = value;
        this._prev = null;
        this._next = null
    }

    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }

    get prev() {
        return this._prev;
    }

    get next() {
        return this._next;
    }

    set prev(node) {
        this._prev = node;
    }
    set next(node) {
        this._next = node;
    }
}

/**
 * Class for LRU Cache
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new DLLNode(0, 0);
        this.tail = new DLLNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.head.prev = null;
        this.tail.next = null;
        this.count = 0;
    }

    /**
     * Deletes a node from the cache
     * @param {DLLNode} node 
     */
    deleteNode(node) {
        if (node === null || node === undefined) {
            throw new Error('Node cannot be null or undefined');
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * Adds a node at the head of the Doubly Linked List
     * @param {DLLNode} node 
     */
    addToHead(node) {
        if (node === null || node === undefined) {
            throw new Error('Node cannot be null or undefined');
        }
        node.next = this.head.next;
        node.next.prev = node;
        node.prev = this.head;
        this.head = node;
    }

    /**
     * Gets the value for the key from cache in O(1)
     * @param {Number} key 
     */
    get(key) {
        if (key === undefined) throw new Error('Key not found');
        if (this.map.has(key) != false) {
            const node = this.map.get(key);
            const result = node.value;
            this.deleteNode(node);
            this.addToHead(node);
            return result;
        }
        throw new Error('Key not found in the cache');
    }

    /**
     * Sets a key against a value in the Cache in O(1)
     * @param {Number} key 
     * @param {Number} value 
     */
    set(key, value) {
        if (key === undefined || value === undefined) throw new Error('Key or value not found');
        if (this.map.has(key) != false) {
            const node = this.map.get(key);
            node.value = value;
            this.deleteNode(node);
            this.addToHead(node);
        }
        else {
            const node = new DLLNode(key, value);
            this.map.set(key, node);
            if (this.count < this.capacity) {
                this.count = this.count + 1;
                this.addToHead(node);
            }
            else {
                this.map.delete(this.tail.prev.key);
                this.deleteNode(this.tail.prev);
                this.addToHead(node);
            }
        }
    }
}

