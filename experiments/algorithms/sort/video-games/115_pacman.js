// Pac-Man's Simple Sort - Eat all the dots in order!
// Wakka wakka! Yum yum yum!

const pelletsNumbers = [38, 27, 43, 3, 9, 82, 10];

// Simple bubble sort - just keep eating until it's organized!
for (let waka = 0; waka < pelletsNumbers.length; waka++) {
  for (let waka2 = 0; waka2 < pelletsNumbers.length - waka - 1; waka2++) {
    if (pelletsNumbers[waka2] > pelletsNumbers[waka2 + 1]) {
      let temp = pelletsNumbers[waka2];
      pelletsNumbers[waka2] = pelletsNumbers[waka2 + 1];
      pelletsNumbers[waka2 + 1] = temp;
    }
  }
}

console.log('[' + pelletsNumbers.join(',') + ']');
