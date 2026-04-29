// A beautiful arrangement of the data
const signals = [82, 43, 10, 27, 38, 3, 9];

// Ordering with elegance and precision
for (let i = 0; i < signals.length; i++) {
  for (let j = i + 1; j < signals.length; j++) {
    if (signals[j] < signals[i]) {
      const swap = signals[i];
      signals[i] = signals[j];
      signals[j] = swap;
    }
  }
}

console.log('[' + signals.join(',') + ']');
