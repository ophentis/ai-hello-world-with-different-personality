// Iron Man: Sorting with AI-assisted precision. Obviously superior.
// I am Iron Man. This sort is, as expected, the best in the world.

const threatAssessment = [38, 27, 43, 3, 9, 82, 10];

// Quicksort: Because I only choose elite algorithms
function ironSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(array.length / 2)];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== Math.floor(array.length / 2)) {
      if (array[i] < pivot) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  }

  return ironSort(less).concat([pivot]).concat(ironSort(greater));
}

let sorted = ironSort(threatAssessment);
console.log('[' + sorted.join(',') + ']');
