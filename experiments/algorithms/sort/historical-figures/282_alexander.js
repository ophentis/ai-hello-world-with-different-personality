// The great undefeated phalanx formation - quicksort like lightning
// Fast, decisive, overwhelming victory through divide and conquer

const battlefield = [38, 27, 43, 3, 9, 82, 10];

function quicksort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quicksort(left), ...middle, ...quicksort(right)];
}

const victory = quicksort(battlefield);
console.log('[' + victory.join(',') + ']');
