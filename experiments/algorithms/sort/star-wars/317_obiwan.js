// Obiwan: From a certain point of view - elegant merge sort
const highGround = [38, 27, 43, 3, 9, 82, 10];

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
};

const sorted = mergeSort(highGround);
console.log('[' + sorted.join(',') + ']');
