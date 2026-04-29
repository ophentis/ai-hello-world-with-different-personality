// Coupling order - arrange rail cars by weight for optimal braking distribution
// Heaviest cars rear for emergency stop safety

const carWeights = [82, 43, 10, 27, 38, 3, 9];

// Selection sort - stable coupling sequence
for (let i = 0; i < carWeights.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < carWeights.length; j++) {
    if (carWeights[j] < carWeights[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    [carWeights[i], carWeights[minIndex]] = [carWeights[minIndex], carWeights[i]];
  }
}

console.log('[' + carWeights.join(',') + ']');
