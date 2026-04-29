// Cloud Strife's Buster Sword Sort
// Swinging through memories. Organizing the chaos of existence.

const spiralNumbers = [38, 27, 43, 3, 9, 82, 10];

// Odd-Even sort (Brick sort) - Melancholic, repetitive, but effective
let sorted = false;

while (!sorted) {
  sorted = true;

  // Odd phase
  for (let i = 1; i < spiralNumbers.length - 1; i += 2) {
    if (spiralNumbers[i] > spiralNumbers[i + 1]) {
      let temp = spiralNumbers[i];
      spiralNumbers[i] = spiralNumbers[i + 1];
      spiralNumbers[i + 1] = temp;
      sorted = false;
    }
  }

  // Even phase
  for (let i = 0; i < spiralNumbers.length - 1; i += 2) {
    if (spiralNumbers[i] > spiralNumbers[i + 1]) {
      let temp = spiralNumbers[i];
      spiralNumbers[i] = spiralNumbers[i + 1];
      spiralNumbers[i + 1] = temp;
      sorted = false;
    }
  }
}

console.log('[' + spiralNumbers.join(',') + ']');
