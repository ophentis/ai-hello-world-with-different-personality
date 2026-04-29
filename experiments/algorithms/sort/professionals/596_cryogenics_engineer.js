// Temperature calibration - sort by cooling efficiency
// Ascending order for cryogenic system optimization

const coolingRates = [82, 43, 10, 27, 38, 3, 9];

const optimized = coolingRates
  .map(r => r)
  .sort((a, b) => a - b);

console.log('[' + optimized.join(',') + ']');
