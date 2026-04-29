// Daffy Duck's chaotic sort - throwing numbers around like a madman!

const unsorted = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort with maximum theatrical flair
for (let i = 0; i < unsorted.length; i++) {
  for (let j = 0; j < unsorted.length - i - 1; j++) {
    if (unsorted[j] > unsorted[j + 1]) {
      // Swap with reckless energy
      let temp = unsorted[j];
      unsorted[j] = unsorted[j + 1];
      unsorted[j + 1] = temp;
    }
  }
}

console.log('[' + unsorted.join(',') + ']');
