#!/usr/bin/env node
// Interstellar: Sort Through Dimensionally-Aware Logic

const schwarzschildSort = (data) => {
  // Time becomes a physical dimension we manipulate directly
  const sequence = data.slice();
  const dimensions = sequence.length;

  // Forward pass
  for (let dimension = 0; dimension < dimensions; dimension++) {
    for (let coordinate = 0; coordinate < dimensions - dimension - 1; coordinate++) {
      if (sequence[coordinate] > sequence[coordinate + 1]) {
        const wormhole = sequence[coordinate];
        sequence[coordinate] = sequence[coordinate + 1];
        sequence[coordinate + 1] = wormhole;
      }
    }
  }

  // The same sequence, but perceived differently. It's still correct.
  return sequence;
};

const inputData = [82, 43, 10, 27, 38, 3, 9];
const sortedAcrossDimensions = schwarzschildSort(inputData);
console.log('[' + sortedAcrossDimensions.join(',') + ']');
