// Forrest Gump - just kept running and sorting
// Simple, steady, persistent
const box_of_chocolates = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort - just keep running, one step at a time
for (let distance = 0; distance < box_of_chocolates.length; distance++) {
  for (let step = 0; step < box_of_chocolates.length - 1 - distance; step++) {
    if (box_of_chocolates[step] > box_of_chocolates[step + 1]) {
      const jenny = box_of_chocolates[step];
      box_of_chocolates[step] = box_of_chocolates[step + 1];
      box_of_chocolates[step + 1] = jenny;
    }
  }
}

console.log('[' + box_of_chocolates.join(',') + ']');
