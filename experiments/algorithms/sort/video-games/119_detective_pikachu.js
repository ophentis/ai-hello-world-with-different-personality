// Detective Pikachu's Investigative Sort
// *Gruff voice* I've cracked the case. Time to organize the evidence.

const caseNumbers = [38, 27, 43, 3, 9, 82, 10];

// Timsort - a sophisticated algorithm worthy of a detective
const minRunLength = (n) => {
  let r = 0;
  while (n >= 64) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
};

function timsort(arr) {
  const minRun = minRunLength(arr.length);

  for (let start = 0; start < arr.length; start += minRun) {
    const end = Math.min(start + minRun, arr.length);
    insertionSort(arr, start, end);
  }

  let size = minRun;
  while (size < arr.length) {
    for (let start = 0; start < arr.length; start += size * 2) {
      const mid = start + size;
      const end = Math.min(start + size * 2, arr.length);
      if (mid < end) {
        merge(arr, start, mid, end);
      }
    }
    size *= 2;
  }
}

function insertionSort(arr, left, right) {
  for (let i = left + 1; i < right; i++) {
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
  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);
  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

timsort(caseNumbers);
console.log('[' + caseNumbers.join(',') + ']');
