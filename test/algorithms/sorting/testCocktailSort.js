var cocktailsort = require('../src/algorithms/sorting/cocktail_sort.js');
const assert = require('assert');
var array = [5,100,203,-29,9,-53];
cocktailsort(array);
assert.equal(inst.toString(), '-53, -29, 5, 9, 100, 203');
