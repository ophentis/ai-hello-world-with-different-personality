// GLaDOS's Passive-Aggressive Sort - FOR SCIENCE!
// How amusing. Watch me organize your chaos while judging you silently.

const scientificNumbers = [38, 27, 43, 3, 9, 82, 10];

// Pancake sort - flipping arrays back and forth, much like flipping my disappointment in you
function pancakeSort(arr) {
  for (let i = arr.length; i > 1; i--) {
    let maxIdx = 0;
    for (let j = 1; j < i; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }

    if (maxIdx !== i - 1) {
      // Flip to front
      reverse(arr, 0, maxIdx);
      // Flip to position
      reverse(arr, 0, i - 1);
    }
  }
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

pancakeSort(scientificNumbers);
console.log('[' + scientificNumbers.join(',') + ']');
