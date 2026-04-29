// Poseidon's trident churns the waters - cocktail sort flows both ways
// The ocean's bidirectional sway

const churning = [38, 27, 43, 3, 9, 82, 10];
let start = 0;
let end = churning.length - 1;
let swapped = true;

while (start < end && swapped) {
  swapped = false;

  // Forward sweep
  for (let i = start; i < end; i++) {
    if (churning[i] > churning[i + 1]) {
      [churning[i], churning[i + 1]] = [churning[i + 1], churning[i]];
      swapped = true;
    }
  }
  end--;

  // Backward sweep
  for (let i = end; i > start; i--) {
    if (churning[i] < churning[i - 1]) {
      [churning[i], churning[i - 1]] = [churning[i - 1], churning[i]];
      swapped = true;
    }
  }
  start++;
}

console.log('[' + churning.join(',') + ']');
