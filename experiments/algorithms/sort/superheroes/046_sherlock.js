// Sherlock Holmes: Elementary! Sort through deductive logic
// The game is afoot—observe the pattern

const clues = [38, 27, 43, 3, 9, 82, 10];

// Merge sort: divide and conquer like a proper investigation
function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  let result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let sorted = mergeSort(clues);
console.log('[' + sorted.join(',') + ']');
