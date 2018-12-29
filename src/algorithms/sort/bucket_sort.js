

function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let temp = array[i];
    for (let j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  let i;
  let minValue = array[0];
  let maxValue = array[0];
  let bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function (currentVal) {
  if (currentVal < minValue) {
    minValue = currentVal;
  	}
  else if (currentVal > maxValue) {
    maxValue = currentVal;
  	}
  });

  // Initializing buckets
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function (bucket) {
    insertionSort(bucket);
  bucket.forEach(function (element) {
    array.push(element);
  	});
  });

  return array;
}

module.exports = bucketSort;
