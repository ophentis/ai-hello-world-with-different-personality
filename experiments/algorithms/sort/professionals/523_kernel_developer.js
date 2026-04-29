// Kernel developer: in-place quicksort, cache efficiency
function quicksort_inplace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quicksort_inplace(arr, low, pi - 1);
    quicksort_inplace(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const data = [82, 43, 10, 27, 38, 3, 9];
quicksort_inplace(data);
console.log(`[${data.join(',')}]`);
