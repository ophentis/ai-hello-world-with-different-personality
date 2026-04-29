// Bill Gates: Systematic optimization. Merge sort for guaranteed performance.
const input = [38, 27, 43, 3, 9, 82, 10];

const merge = (left, right) => {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    result.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

const sorted = mergeSort(input);
console.log('[' + sorted.join(',') + ']');
