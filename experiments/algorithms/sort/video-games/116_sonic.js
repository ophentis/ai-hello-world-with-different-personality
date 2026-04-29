// Sonic's Speed Sort - GOTTA GO FAST!
// No time for slow sorts. Quicksort to the rescue!

const fastNumbers = [38, 27, 43, 3, 9, 82, 10];

function sonicSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter(x => x < pivot);
  let middle = arr.filter(x => x === pivot);
  let right = arr.filter(x => x > pivot);

  return sonicSort(left).concat(middle).concat(sonicSort(right));
}

const sorted = sonicSort(fastNumbers);
console.log('[' + sorted.join(',') + ']');
