// GOAT competes to win. No compromise.
const stats = [38, 27, 43, 3, 9, 82, 10];

stats.sort((a, b) => {
  // Championship mentality: always push for the optimal result
  return a - b;
});

console.log('[' + stats.join(',') + ']');
