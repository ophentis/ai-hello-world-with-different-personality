// Redundancy ranking - sort failure rates ascending
// Lowest MTBF systems require most redundancy

const failureRates = [82, 43, 10, 27, 38, 3, 9];

const sorted = failureRates.concat().sort((a, b) => a - b);

console.log('[' + sorted.join(',') + ']');
