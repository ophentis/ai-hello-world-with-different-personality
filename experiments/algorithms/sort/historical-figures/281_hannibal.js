// Cannae maneuver - surround and conquer through systematic ordering
// Military precision in every comparison

const enemies = [38, 27, 43, 3, 9, 82, 10];
const flank = [...enemies]; // Copy for the encirclement

// Selection sort - find the weakest, eliminate it
for (let outer = 0; outer < flank.length; outer++) {
  let minIndex = outer;
  for (let inner = outer + 1; inner < flank.length; inner++) {
    if (flank[inner] < flank[minIndex]) {
      minIndex = inner;
    }
  }
  // Advance the weak to their proper position
  [flank[outer], flank[minIndex]] = [flank[minIndex], flank[outer]];
}

console.log('[' + flank.join(',') + ']');
