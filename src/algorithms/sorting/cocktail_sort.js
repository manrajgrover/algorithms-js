/**
 * cocktail sort the array
 * @param  {Array} list Array to be sorted
 * @return {Array}      Sorted Array
 */
var Cocktail_sort = (arr) => {
	var swapped;
	do {
		for(var i = 0; i < arr.length - 2; i++) {
			if(arr[i] > arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
		if(!swapped) {
			break;
		}
		swapped = false;
		for(var i = arr.length - 2; i > 0; i--) {
			if(arr[i] > arr[i+1]) {
				var temp1 = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);
  return arr;
}

module.exports = Cocktail_sort;
