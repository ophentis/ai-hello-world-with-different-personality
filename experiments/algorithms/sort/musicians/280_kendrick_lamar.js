// DAMN. The structure speaks volumes through arrangement.
// A storytelling sort that reveals order through sequence.

const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = [];

// Bubble sort - let each element find its place in the narrative
for (let i = 0; i < unsorted.length; i++) {
  for (let j = 0; j < unsorted.length - i - 1; j++) {
    if (unsorted[j] > unsorted[j + 1]) {
      // Swap - the reversal is key to the story
      [unsorted[j], unsorted[j + 1]] = [unsorted[j + 1], unsorted[j]];
    }
  }
}

console.log('[' + unsorted.join(',') + ']');
