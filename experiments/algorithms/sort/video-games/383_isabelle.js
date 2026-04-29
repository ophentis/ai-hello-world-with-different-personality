// Isabelle's Super Helpful Sorting Algorithm - Yes!

const unsortedNumbers = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < unsortedNumbers.length - 1; i++) {
  for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
    if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
      const temporary = unsortedNumbers[j];
      unsortedNumbers[j] = unsortedNumbers[j + 1];
      unsortedNumbers[j + 1] = temporary;
    }
  }
}

console.log('[' + unsortedNumbers.join(',') + ']');
