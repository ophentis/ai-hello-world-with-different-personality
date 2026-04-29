// Athena's strategic mind - merge sort divides wisely, conquers elegantly
// Every step calculated for optimal victory

const battlefield = [38, 27, 43, 3, 9, 82, 10];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

const ordered = mergeSort(battlefield);
console.log('[' + ordered.join(',') + ']');
