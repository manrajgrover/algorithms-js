class LRUCache {
  constructor(capacity, values) {
    const _cache = new Map();
    const leastRecent = () => _cache.keys().next().value;
    // getter
    const get = key => () => {
      const value = _cache.get(key);
      if (_cache.has(key)) {
        // refresh key
        _cache.delete(key);
        _cache.set(key, value);
      }
      return value;
    };
    // setter
    const set = key => (value) => {
      if (_cache.has(key)) {
        // refresh key
        _cache.delete(key);
      } else if (_cache.size === capacity) {
        this.delete(leastRecent());
      }
      _cache.set(key, value);
    };

    Object.defineProperties(this, {
      cache: {
        value: (key, value) => {
          // update key value
          set(key)(value);
          return key in this ? this : Object.defineProperty(this, key, {
            get: get(key), set: set(key), enumerable: true, configurable: true
          });
        }
      },
      delete: {
        value: (key) => {
          _cache.delete(key);
          try {
            return delete this[key];
          } catch (e) {
            return false;
          }
        }
      },
      size: {
        get: () => _cache.size
      },
      capacity: {
        get: () => capacity,
        set: (value) => {
          capacity = value;
          while (this.size > capacity) {
            // delete least recent used keys
            this.delete(leastRecent());
          }
        }
      },
    });

    Object.entries(values).forEach(([key, value]) => this.cache(key, value));
  }
}

module.exports = LRUCache;
