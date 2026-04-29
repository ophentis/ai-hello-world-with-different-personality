// Gandalf: You shall not pass unsorted! This array must be ordered!
// Many that live deserve death. And some that sort deserves respect.

const fellowship = [38, 27, 43, 3, 9, 82, 10];

// Merge sort: The noble algorithm of wizards and kings
function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  let merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

let sorted = mergeSort(fellowship);
console.log('[' + sorted.join(',') + ']');
