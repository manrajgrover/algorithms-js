/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const binarysearchRecursive = (array, low, high, element) => {
  var mid;
console.log(low,high);
//base condition
if(low > high)
{
  return -1;
}

//calculate the midpoint of array
mid=Math.floor(low+(high-low)/2);
console.log(mid);

if (element == array[mid])
{
  return mid;
}

else if (element<array[mid])
{
  //if the number is less the number at the midpoint of array
  return binarysearchRecursive(array,low,mid-1,element);
}

else
{
  //if the number is more the number at the midpoint of array
  return binarysearchRecursive(array,mid+1,high,element);
}

};

module.exports = binarysearchRecursive;
