// Link's sort - Swift, decisive, like a Hylian warrior
// HYAH!

const swordNumbers = [38, 27, 43, 3, 9, 82, 10];

// Quicksort - fast and lethal
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

quickSort(swordNumbers, 0, swordNumbers.length - 1);
console.log('[' + swordNumbers.join(',') + ']');
