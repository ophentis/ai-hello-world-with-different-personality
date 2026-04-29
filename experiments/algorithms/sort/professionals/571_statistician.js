// Statistician - sort sample values ascending
const samples = [82, 43, 10, 27, 38, 3, 9];
samples.sort((a, b) => a - b);
console.log('[' + samples.join(',') + ']');