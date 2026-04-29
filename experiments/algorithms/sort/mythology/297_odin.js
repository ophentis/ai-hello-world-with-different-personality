// Odin's wisdom - timsort adaptive to the data
// The all-father understands every pattern

const runestones = [38, 27, 43, 3, 9, 82, 10];
const minRun = 3;

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

function merge(arr, left, mid, right) {
  const leftPart = arr.slice(left, mid + 1);
  const rightPart = arr.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;

  while (i < leftPart.length && j < rightPart.length) {
    arr[k++] = leftPart[i] <= rightPart[j] ? leftPart[i++] : rightPart[j++];
  }

  while (i < leftPart.length) arr[k++] = leftPart[i++];
  while (j < rightPart.length) arr[k++] = rightPart[j++];
}

for (let start = 0; start < runestones.length; start += minRun) {
  insertionSort(runestones, start, Math.min(start + minRun - 1, runestones.length - 1));
}

let size = minRun;
while (size < runestones.length) {
  for (let left = 0; left < runestones.length; left += size * 2) {
    const mid = left + size - 1;
    const right = Math.min(left + size * 2 - 1, runestones.length - 1);
    if (mid < right) merge(runestones, left, mid, right);
  }
  size *= 2;
}

console.log('[' + runestones.join(',') + ']');
