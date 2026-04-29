// Luigi's sort - Methodical, careful, a bit anxious but thorough

const shyNumbers = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort - nervous precision, one at a time
for (let i = 1; i < shyNumbers.length; i++) {
  let key = shyNumbers[i];
  let j = i - 1;

  // Shift elements with careful hesitation
  while (j >= 0 && shyNumbers[j] > key) {
    shyNumbers[j + 1] = shyNumbers[j];
    j = j - 1;
  }
  shyNumbers[j + 1] = key;
}

console.log('[' + shyNumbers.join(',') + ']');
