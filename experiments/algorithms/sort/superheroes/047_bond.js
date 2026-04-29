// James Bond: A martini. Shaken, not stirred. And a sorted array.
// License to sort with style

const missionBriefing = [38, 27, 43, 3, 9, 82, 10];

// Quicksort: the elegant choice of discerning operatives
function quicksort(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksort(less).concat([pivot]).concat(quicksort(greater));
}

let sorted = quicksort(missionBriefing);
console.log('[' + sorted.join(',') + ']');
