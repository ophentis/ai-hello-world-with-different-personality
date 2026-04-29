// Imagine a sort algorithm full of peace and love
// Merge sort: unite, don't divide. Bring harmony through merging.

function imagineMerge(left, right) {
  const unified = [];
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      unified.push(left[l++]);
    } else {
      unified.push(right[r++]);
    }
  }
  return unified.concat(left.slice(l), right.slice(r));
}

function imagineSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return imagineMerge(imagineSort(arr.slice(0, mid)), imagineSort(arr.slice(mid)));
}

const peace = [38, 27, 43, 3, 9, 82, 10];
const harmony = imagineSort(peace);
console.log('[' + harmony.join(',') + ']');
