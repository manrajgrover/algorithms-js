---
id: algorithms
title: Algorithms
sidebar_label: Algorithms
---

## Geometry

### Tangent Between Circles

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/geometry/tangent_between_circles.js)

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

## Math


### Extended Euclidean

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/math/extended_euclidean.js)

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




### Fast Exp

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/math/fast_exp.js)

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




### Greatest Common Denominator

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/math/gcd.js)

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




### Least Common Multiple

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/math/lcm.js)

#### lcm(a, b) 

Calculates LCM of two numbers




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| a | `Number`  | First number | &nbsp; |
| b | `Number`  | Second number | &nbsp; |




##### Returns


- `Number`  LCM of two numbers




### Modular Inverse

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/math/modular_inverse.js)

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

## Search


### Binary Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/binary_search.js)

#### binarysearch(sortedArray, element) 

Binary Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### Exponential Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/exponential_search.js)

#### exponentialsearch(sortedArray, element) 

Exponential Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### Interpolation Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/interpolation_search.js)

#### interpolationsearch(sortedArray, element) 

Interpolation Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### Jump Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/jump_search.js)

#### jumpsearch(sortedArray, element) 

Jump Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### Linear Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/linear_search.js)

#### linearsearch(array, element) 

Linear Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| array | `Array`  | Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found




### Ternary Search

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/search/ternary_search.js)

#### ternarysearch(sortedArray, element) 

Ternary Search Algorithm




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| sortedArray | `Array`  | Sorted Array to be searched | &nbsp; |
| element | `Number`  | Element to be searched | &nbsp; |




##### Returns


- `Number`  Index of the element, if found

## Sort


### Bubble Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/bubble_sort.js)

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




### Count Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/count_sort.js)

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




### Heap Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/heap_sort.js)

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




### Insertion Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/insertion_sort.js)

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




### Merge Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/merge_sort.js)

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




### Quick Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/quick_sort.js)

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




### Selection Sort

[Code](https://github.com/manrajgrover/algorithms-js/tree/master/src/algorithms/sort/selection_sort.js)

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
