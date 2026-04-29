// Seven of Nine prefers order and logic
const dataset = [82, 43, 10, 27, 38, 3, 9];

// Systematic analysis and reorganization
for (let i = 0; i < dataset.length - 1; i++) {
  for (let j = 0; j < dataset.length - i - 1; j++) {
    if (dataset[j] > dataset[j + 1]) {
      const placeholder = dataset[j];
      dataset[j] = dataset[j + 1];
      dataset[j + 1] = placeholder;
    }
  }
}

console.log('[' + dataset.join(',') + ']');
