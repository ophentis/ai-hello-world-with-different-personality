// Mario's Mushroom Sort - organized like a power-up collection!

const unorderedNumbers = [38, 27, 43, 3, 9, 82, 10];

// Simple selection sort - careful and methodical like collecting coins
for (let i = 0; i < unorderedNumbers.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < unorderedNumbers.length; j++) {
    if (unorderedNumbers[j] < unorderedNumbers[minIndex]) {
      minIndex = j;
    }
  }
  // Swap the smallest to the front
  let temp = unorderedNumbers[i];
  unorderedNumbers[i] = unorderedNumbers[minIndex];
  unorderedNumbers[minIndex] = temp;
}

console.log('[' + unorderedNumbers.join(',') + ']');
