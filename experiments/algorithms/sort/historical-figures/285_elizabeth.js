// The Virgin Queen's refined court - elegant sorting befitting a sovereign
// Merge sort - the dignified ascent to order

const courtiers = [38, 27, 43, 3, 9, 82, 10];

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid)));
}

const arranged = mergesort(courtiers);
console.log('[' + arranged.join(',') + ']');
