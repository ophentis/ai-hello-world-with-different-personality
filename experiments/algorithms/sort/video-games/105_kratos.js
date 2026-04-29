// KRATOS UNLEASHES THE FURY OF SORTING
// SPARTAN RAGE! BRUTAL. UNFORGIVING.

const godNumbers = [38, 27, 43, 3, 9, 82, 10];

// Heapsort - crushing numbers with the fury of the Blades of Chaos
function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
}

heapSort(godNumbers);
console.log('[' + godNumbers.join(',') + ']');
