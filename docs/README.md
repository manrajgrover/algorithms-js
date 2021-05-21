# [algorithms-js](https://github.com/manrajgrover/algorithms-js#readme) *0.0.8*

> Algorithms Library in JavaScript


### src/algorithms/geometry/tangent_between_circles.js


#### new CircleTangents() 

Class for finding Tangent between circles

Implementation from
https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Tangents_between_two_circles






##### Returns


- `Void`



#### this._x1()  *private method*








##### Returns


- `Void`



#### this._y1()  *private method*








##### Returns


- `Void`



#### this._r1()  *private method*








##### Returns


- `Void`



#### this._x2()  *private method*








##### Returns


- `Void`



#### this._y2()  *private method*








##### Returns


- `Void`



#### this._r2()  *private method*








##### Returns


- `Void`



#### this._tangents()  *private method*








##### Returns


- `Void`




### src/algorithms/math/extended_euclidean.js


#### extendedEuclidean(a, b) 

The extended Euclidean algorithm is an algorithm to
compute integers x and y such that given a and b.
ax + by = gcd(a, b)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | Coefficient of x | &nbsp; |
| b | `Number`  | Coefficient of y | &nbsp; |




##### Returns


- `Object`  Object containing value of x, y and gcd




### src/algorithms/math/fast_exp.js


#### fastexp(a, e, mod) 

Raises base to a power keeping mod in check




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | Base | &nbsp; |
| e | `Number`  | Power | &nbsp; |
| mod | `Number`  | Mod Value | &nbsp; |




##### Returns


- `Number`  Base to a power keeping mod in check




### src/algorithms/math/gcd.js


#### gcd(a, b) 

Calculates GCD of two numbers




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | First number | &nbsp; |
| b | `Number`  | Second number | &nbsp; |




##### Returns


- `Number`  HCF or GCD of two numbers 
References: https://math.stackexchange.com/questions/927050/can-we-find-the-gcd-of-a-positive-and-negative-number




### src/algorithms/math/lcm.js


#### lcm(a, b) 

Calculates LCM of two numbers




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | First number | &nbsp; |
| b | `Number`  | Second number | &nbsp; |




##### Returns


- `Number`  LCM of two numbers




### src/algorithms/math/modular_inverse.js


#### fermetModularInverse(a, m) 

Calculates modular inverse of a number using Fermet's theorem




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | Number for which inverse needs to be found | &nbsp; |
| m | `Number`  | Mod val | &nbsp; |




##### Returns


- `Number`  Modular Inverse



#### modularInverse(a, m) 

Calculates modular inverse of a number




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | Number for which inverse needs to be found | &nbsp; |
| m | `Number`  | Mod val | &nbsp; |




##### Returns


- `Number`  Modular Inverse




### src/algorithms/search/binary_search.js


#### binarysearch(sortedArray, element) 

Binary Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/search/exponential_search.js


#### exponentialsearch(sortedArray, element) 

Exponential Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/search/interpolation_search.js


#### interpolationsearch(sortedArray, element) 

Interpolation Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/search/jump_search.js


#### jumpsearch(sortedArray, element) 

Jump Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/search/linear_search.js


#### linearsearch(array, element) 

Linear Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| array | `Array`  | Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/search/ternary_search.js


#### ternarysearch(sortedArray, element) 

Ternary Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### src/algorithms/sort/bubble_sort.js


#### new BubbleSort() 

Class for Bubble Sorting an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _sort(list)  *private method*

Bubble Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/count_sort.js


#### new CountSort() 

Class for Count Sorting an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._reverse()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _sort(list)  *private method*

Count Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/heap_sort.js


#### new HeapSort() 

Class for Heap Sorting an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _sort(list)  *private method*

Heap Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/insertion_sort.js


#### new InsertionSort() 

Class for Insertion Sort for an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _sort(list)  *private method*

Insertion Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/merge_sort.js


#### new MergeSort() 

Class for Merge Sorting an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _merge(leftList, rightList)  *private method*

Merges the two array in sorted order




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| leftList | `Array`  | Left array | &nbsp; |
| rightList | `Array`  | Right array | &nbsp; |




##### Returns


- `Array`  Merged array



#### _mergeSort(list)  *private method*

Recursive function to divide array into two halves and merge the sorted array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted Array



#### _sort(list)  *private method*

Merge Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/quick_sort.js


#### new QuickSort() 

Class for Quick Sorting an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _partition(list, low, high)  *private method*

Create a partition and sort the individual parts




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | List to be sorted | &nbsp; |
| low | `Number`  | Left index | &nbsp; |
| high | `Number`  | Right index | &nbsp; |




##### Returns


- `List`  List containing sorted list and partition index



#### _quickSort(list, low, high)  *private method*

Recursive function to create partition and sort the halves




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | List to be sorted | &nbsp; |
| low | `Number`  | Left index | &nbsp; |
| high | `Number`  | Right index | &nbsp; |




##### Returns


- `List`  Sorted list



#### _sort(list, low, high)  *private method*

Quick sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Unsorted List | &nbsp; |
| low | `Number`  | Left index | &nbsp; |
| high | `Number`  | Right index | &nbsp; |




##### Returns


- `Array`  Sorted list



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array




### src/algorithms/sort/selection_sort.js


#### new SelectionSort() 

Class for Selection Sort for an array






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array



#### _sort(list)  *private method*

Selection Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array



### src/algorithms/sort/radix_sort.js


#### new RadixSort() 

Class for Radix Sort for an array of integers






##### Returns


- `Void`



#### this._unsortedList()  *private method*








##### Returns


- `Void`



#### this._sortedList()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of array






##### Returns


- `Number`  Size of array



#### unsortedList() 

Get unsorted array






##### Returns


- `Array`  Unsorted/Initial array



#### sortedList() 

Get sorted array






##### Returns


- `Array`  Sorted array


#### _getDigit(num, i)  *private method*

Get the digit at index i from an integer number




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | Number from which to extract the digit | &nbsp; |
| i | `Number`  | Index from which to extract the digit | &nbsp; |




##### Returns


- `Number`  Extracted digit



#### _getDigitCount(num)  *private method*

Get the number of digits in an integer number




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| num | `Number`  | Number from which to count digits | &nbsp; |




##### Returns


- `Number`  Number of digits



#### _getMostDigits(nums)  *private method*

Given an array of integers, returns the number of digits in the largest number in the array



##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| nums | `Array`  | Array of numbers | &nbsp; |




##### Returns


- `Number`  Largest number of digits in an integer found in the array



#### _sort(list)  *private method*

Selection Sorts the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| list | `Array`  | Array of integers to be sorted | &nbsp; |




##### Returns


- `Array`  Sorted array



#### toString() 

Get string form of array






##### Returns


- `String`  Comma separated string array



### src/data-structures/doubly_linked_list.js


#### new DoublyLinkedList() 

Class for Doubly Linked List






##### Returns


- `Void`



#### DoublyLinkedList.length() 

Get length of Doubly Linked List






##### Returns


- `Number`  Length of Linked List



#### DoublyLinkedList.isEmpty() 

Check if Doubly Linked List is empty or not






##### Returns


- `Boolean`  `true` if empty else `false`



#### DoublyLinkedList.tail() 

Get tail of Doubly Linked List






##### Returns


- `Node`  Tail node



#### DoublyLinkedList.head() 

Get head of Doubly Linked List






##### Returns


- `Node`  Head node



#### DoublyLinkedList.push(data) 

Pushes node to the head of Doubly Linked List




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Data or value contained in Node | &nbsp; |




##### Returns


- `None`  



#### DoublyLinkedList.insertAfter(prevNode, data) 

Inserts node after a given node




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prevNode | `Node`  | Node after which insertion needs to take place | &nbsp; |
| data |  | Data or value contained in Node | &nbsp; |




##### Returns


- `None`  



#### DoublyLinkedList.insertBefore(node, data) 

Inserts node before a given node




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| node | `Node`  | Node before which insertion needs to take place | &nbsp; |
| data |  | Data or value contained in Node | &nbsp; |




##### Returns


- `Node`  



#### DoublyLinkedList.pop() 

Pop node from the head






##### Returns


- `Node`  Node popped



#### DoublyLinkedList.deleteNode(node) 

Delete node from the list




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| node | `Node`  | Node to be deleted | &nbsp; |




##### Returns


- `None`  



#### DoublyLinkedList.getNode(index) 

Returns node at given index




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index of required node | &nbsp; |




##### Returns


- `Node`  Required node



#### DoublyLinkedList.toString() 

Returns string representing the Doubly Linked List






##### Returns


- `String`  String representation of Doubly Linked List




### src/data-structures/fenwick_tree.js


#### new FenwickTree() 

Class for Fenwick Tree






##### Returns


- `Void`



#### this._list()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### size() 

Get size of Fenwick Tree






##### Returns


- `Number`  Size of Fenwick Tree



#### buildTree(array) 

Builds Fenwick Tree




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| array | `Array`  | Array elements to be used to build the tree | &nbsp; |




##### Returns


- `None`  



#### isEmpty() 

Check if tree is empty






##### Returns


- `Boolean`  Returns true if empty else false



#### getSum(index) 

Gets prefix sum of the array using the tree




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index till which sum needs to be calculated | &nbsp; |




##### Returns


- `Number`  Prefix sum



#### updateTree(index, element) 

Updates the tree with adding element to given index




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index of element to be updated | &nbsp; |
| element | `Number`  | Element to be added | &nbsp; |




##### Returns


- `None`  



#### rangeSum(left, right) 

Calculates range sum from given index to given index




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| left | `Number`  | Left index | &nbsp; |
| right | `Number`  | Right index | &nbsp; |




##### Returns


- `Number`  Range sum




### src/data-structures/graph.js


#### new Graph() 

Class for Graphs






##### Returns


- `Void`



#### this._isDirected()  *private method*








##### Returns


- `Void`



#### this._vertices()  *private method*








##### Returns


- `Void`



#### this._edges()  *private method*








##### Returns


- `Void`



#### size() 

Get size of graph






##### Returns


- `Number`  Size of graph



#### vertices() 

Get vertices of graph






##### Returns


- `Array`  Vertices in the graph



#### isEmpty() 

Check whether graph is empty or not






##### Returns


- `Boolean`  True if empty else False



#### addVertex(vertex) 

Adds vertex to the Graph




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertex | `Number`  | Vertex label | &nbsp; |




##### Returns


- `Void`



#### addEdge(vertexA, vertexB, weight) 

Adds edge between two vertices




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertexA | `Number`  | Starting vertex label | &nbsp; |
| vertexB | `Number`  | Ending vertex label | &nbsp; |
| weight | `Number`  | Weight to be added for edge | &nbsp; |




##### Returns


- `Void`



#### removeVertex(vertex) 

Removes vertex from the Graph




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertex | `Number`  | Vertex label | &nbsp; |




##### Returns


- `Void`



#### removeEdge(vertexA, vertexB) 

Removes edge between two vertices




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertexA | `Number`  | Starting vertex label | &nbsp; |
| vertexB | `Number`  | Ending vertex label | &nbsp; |




##### Returns


- `Void`



#### isNeighbour(vertexA, vertexB) 

Check whether one vertex is neighbour to another




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertexA | `Number`  | Origin vertex | &nbsp; |
| vertexB | `Number`  | Vertex to be checked for | &nbsp; |




##### Returns


- `Boolean`  True if neighbour else False



#### getNeighbours(vertex) 

Returns neighbours of a given vertex




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertex | `Number`  | Vertex whose neighbours are required | &nbsp; |




##### Returns


- `Array`  List of neighbouring vertices



#### getEdgeWeight(vertexA, vertexB) 

Returns edge weight of edge between two vertices




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| vertexA | `Number`  | Starting Vertex label | &nbsp; |
| vertexB | `Number`  | Ending Vertex label | &nbsp; |




##### Returns


- `Number`  Edge weight



#### dfs(root, callback) 

Depth First Search




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| root | `Number`  | Root vertex | &nbsp; |
| callback | `Function`  | Function to be called on each vertex | &nbsp; |




##### Returns


- `Void`



#### bfs(root, callback) 

Breadth First Search




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| root | `Number`  | Root vertex | &nbsp; |
| callback | `Function`  | Function to be called on each vertex | &nbsp; |




##### Returns


- `Void`




### src/data-structures/heap.js


#### new Heap() 

Class for Heaps






##### Returns


- `Void`



#### this._list()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### this._compareFunc()  *private method*








##### Returns


- `Void`



#### size() 

Get size of Heap






##### Returns


- `Number`  Size of Heap



#### _buildHeap(data)  *private method*

Build Heap




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Single element or array of data to be used for Heap | &nbsp; |




##### Returns


- `None`  



#### _parent(index)  *private method*

Get parent of index




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index for which parent is required | &nbsp; |




##### Returns


- `Number`  Parent of index



#### _left(index)  *private method*

Get index of left node




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index for which left node index is needed | &nbsp; |




##### Returns


- `Number`  Index of left node



#### _right(index)  *private method*

Get index of right node




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index for which right node index is needed | &nbsp; |




##### Returns


- `Number`  Index of right node



#### _swap(x, y)  *private method*

Swap nodes




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| x | `Number`  | Index of node one | &nbsp; |
| y | `Number`  | Index of node two | &nbsp; |




##### Returns


- `None`  



#### _heapify(index)  *private method*

Heapifies the array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index of root | &nbsp; |




##### Returns


- `None`  



#### isEmpty() 

Whether Heap is empty






##### Returns


- `Boolean`  Whether Heap is empty or not



#### top() 

Get top of Heap






##### Returns


-  Top value of Heap



#### push(element) 

Pushes node to the Heap




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element |  | Value to be inserted | &nbsp; |




##### Returns


- `None`  



#### pop() 

Pop node from the Heap






##### Returns


-  Top popped node from the Heap




### src/data-structures/linked_list.js


#### new LinkedList() 

Class for Linked List






##### Returns


- `Void`



#### this._head()  *private method*








##### Returns


- `Void`



#### this._length()  *private method*








##### Returns


- `Void`



#### length() 

Get length of Linked List






##### Returns


- `Number`  Length of Linked List



#### isEmpty() 

Check if Linked List is empty or not






##### Returns


- `Boolean`  `true` if empty else `false`



#### push(data) 

Pushes node to the end of Linked List




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Data or value contained in Node | &nbsp; |




##### Returns


- `LinkedList`  `this`



#### pop() 

Pops node from the end of Linked List






##### Returns


- `LinkedList`  `this`



#### popNodeByIndex(index) 

Pops node from particular place in Linked List




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index of node from end of the list | &nbsp; |




##### Returns


- `LinkedList`  `this`



#### getNodeByIndex(index) 

Returns node at particular index else throws error if index out of range




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| index | `Number`  | Index of node from end | &nbsp; |




##### Returns


- `Node`  Required node



#### getNodeByValue(value) 

Returns first occurance of node with given value




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value |  | Value to be searched | &nbsp; |




##### Returns


- `Node`  First occurance of node with given value else -1



#### getListAsArray() 

Returns Linked List as Array






##### Returns


- `Array`  Array containing values of Linked List



#### reverseList() 

Reverses Linked List






##### Returns


-  None



#### forEach(func) 

Iterates over all nodes of linked list and runs function on the node value




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| func | `func`  | Function containing logic to be applied to node value | &nbsp; |




##### Returns


- `None`  



#### toString() 

Returns string representing the linked list






##### Returns


- `string`  String representation of linked list




### src/data-structures/queue.js


#### new Queue() 

Class for Queues






##### Returns


- `Void`



#### this._list()  *private method*








##### Returns


- `Void`



#### size() 

Get length of Queue






##### Returns


- `Number`  Size of Queue



#### isEmpty() 

Check if Queue is empty or not






##### Returns


- `Boolean`  `true` if empty else `false`



#### push(data) 

Pushes node in Queue




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Data or value to be pushed | &nbsp; |




##### Returns


- `None`  



#### pop() 

Pop node from Queue






##### Returns


-  Value of node which was popped



#### front() 

Get front value on Queue






##### Returns


-  Value of node at the front



#### back() 

Get back value on Queue






##### Returns


-  Value of node at the back




### src/data-structures/stack.js


#### new Stack() 

Class for Stacks






##### Returns


- `Void`



#### this._list()  *private method*








##### Returns


- `Void`



#### size() 

Get length of Stack






##### Returns


- `Number`  Size of Stack



#### isEmpty() 

Check if Stack is empty or not






##### Returns


- `Boolean`  `true` if empty else `false`



#### push(data) 

Pushes node in Stack




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data |  | Data or value to be pushed | &nbsp; |




##### Returns


- `None`  



#### pop() 

Pop node from Stack






##### Returns


-  Value of node which was popped



#### top() 

Get top value on stack






##### Returns


-  Value of node at the top




### src/data-structures/trie.js


#### new Trie() 

Class for Trie






##### Returns


- `Void`



#### this._root()  *private method*








##### Returns


- `Void`



#### this._size()  *private method*








##### Returns


- `Void`



#### size() 

Get size of Trie






##### Returns


- `Number`  Size of Trie



#### isEmpty() 

Checks if trie is empty or not






##### Returns


- `Boolean`  true if empty else false



#### insert(data, val) 

Inserts data into trie




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data | `String`  | String to be inserted | &nbsp; |
| val |  | Leaf node value | &nbsp; |




##### Returns


- `Node`  Inserted node in trie



#### search(data) 

Searches and returns whether word exists in trie




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data | `String`  | Data to be searched | &nbsp; |




##### Returns


-  val of leaf node, if exist else false



#### _remove(node, data, level, length)  *private method*

Recursively deletes word from the trie




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| node | `Node`  | Current node being explored | &nbsp; |
| data | `String`  | Word to be deleted | &nbsp; |
| level | `Integer`  | Depth looked in trie | &nbsp; |
| length | `Integer`  | Length of word | &nbsp; |




##### Returns


- `Boolean`  true if deleted else false



#### delete(data)  *private method*

Word to be deleted




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data | `String`  | Word to be deleted | &nbsp; |




##### Returns


- `Boolean`  true if deleted else false




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
