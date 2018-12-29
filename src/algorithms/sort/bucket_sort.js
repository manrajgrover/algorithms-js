

function insertionSort(array) {
  const length = array.length;
  let j;

  for (let i = 1; i < length; i += 1) {
    const temp = array[i];
    for (let j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
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

  // Setting min and max values
    array.forEach(function (currentVal) {
      if (currentVal < minValue) {
        minValue = currentVal;
  	} else if (currentVal > maxValue) {
        maxValue = currentVal;
  	}
  });

  // Initializing buckets
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i += 1) {
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
