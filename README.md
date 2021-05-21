# algorithms-js [![Build Status](https://travis-ci.org/manrajgrover/algorithms-js.svg?branch=master)](https://travis-ci.org/manrajgrover/algorithms-js) [![Build status](https://ci.appveyor.com/api/projects/status/6l0vybrb4y0c7eh8?svg=true)](https://ci.appveyor.com/project/manrajgrover/algorithms-js) [![npm](https://img.shields.io/npm/v/algorithms-js.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/algorithms-js) [![npm](https://img.shields.io/npm/dt/algorithms-js.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/algorithms-js) ![awesome](https://img.shields.io/badge/awesome-yes-green.svg)
> Consumable Data Structures and Algorithms library in JavaScript


## Note

I'm looking for maintainers for this project. Please email me if you are interested in maintaining the project.

## Installation

**Run**

```shell
$ npm install algorithms-js
```

Or use `unpkg`:

```html
<script src="https://unpkg.com/algorithms-js/dist/algorithms.min.js"></script>
```

Or use `jsdeliver`:

```html
<script src="https://cdn.jsdelivr.net/npm/algorithms-js/dist/algorithms.min.js"></script>
```

## Usage
Library contains both algorithms as well as data structures:

### Data Structures
Currently, library supports following data structures:

- [Doubly Linked List](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/doubly_linked_list.js)
- [Fenwick Tree](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/fenwick_tree.js)
- [Graph](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/graph.js)
- [Heap](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/heap.js)
- [Linked List](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/linked_list.js)
- [Queue](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/queue.js)
- [Stack](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/stack.js)
- [Trie](https://github.com/manrajgrover/algorithms-js/blob/master/src/data-structures/trie.js)

### Algorithms
Currently library supports following algorithms:

#### Search
Various Searching algorithms:

- [Binary Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/binary_search.js)
- [Breadth First Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/breadth_first_search.js)
- [Depth First Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/depth_first_search.js)
- [Exponential Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/exponential_search.js)
- [Interpolation Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/interpolation_search.js)
- [Jump Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/jump_search.js)
- [Linear Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/linear_search.js)
- [Ternary Search](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/search/ternary_search.js)

#### Sort
Various Sorting algorithms:

- [Bubble Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/bubble_sort.js)
- [Count Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/count_sort.js)
- [Heap Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/heap_sort.js)
- [Insertion Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/insertion_sort.js)
- [Merge Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/merge_sort.js)
- [Quick Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/quick_sort.js)
- [Selection Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/selection_sort.js)
- [Selection Sort](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/sort/radix_sort.js)

#### Math
Various Math algorithms:

- [Extended Euclidean](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/math/extended_euclidean.js)
- [Fast Exponentiation](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/math/fast_exp.js)
- [GCD](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/math/gcd.js)
- [LCM](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/math/lcm.js)

#### String
Various String algorithms:

- [Levenshtein Distance](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/string/levenshtein_distance.js)

#### Geometry
Various Geometry algorithms:

- [Tangent between circles](https://github.com/manrajgrover/algorithms-js/blob/master/src/algorithms/geometry/tangent_between_circles.js)

## Development

Run:

```sh
$ git clone https://github.com/manrajgrover/algorithms-js.git
$ cd algorithms-js
$ npm install
```

This will setup the library dependencies for you.

To run tests, run

```sh
$ npm run test
```

To lint your code, run

```sh
$ npm run lint
```

To generate test coverage, run

```sh
$ npm run report
```

To build docs, run

```sh
$ npm run docs
```

To build for browser, run

```sh
$ npm run build-dev
```

## Get in touch
Say hi on [twitter](https://twitter.com/manrajsgrover)

## License

[MIT](https://github.com/manrajgrover/algorithms-js/blob/master/LICENSE) © Manraj Singh
