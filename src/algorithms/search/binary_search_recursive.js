/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
 function binarysearchRecursive(array, low, high, num) {
   //let mid;
   console.log(low, high);
   //base condition
   if(low > high) {
     return -1;
   }

   //calculate the midpoint of array
   const midPoint = (high - low) / 2;
   let mid = Math.floor(low + midPoint);
   console.log(mid);

   if (num === array[mid]) {
   	return mid;
   }

   else if (num < array[mid]) {
   	//if the number is less the number at the midpoint of array
   	return binarysearchRecursive(array, low, mid-1, num);
   }

   else {
   	//if the number is more the number at the midpoint of array
   	return binarysearchRecursive(array, mid+1, high, num);
   }

 }

module.exports = binarysearchRecursive;
