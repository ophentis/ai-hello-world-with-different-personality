// Efficiency rating - sort packages by cost-to-protection ratio
// Ascending order for optimal design

const efficiencyScores = [82, 43, 10, 27, 38, 3, 9];

const optimized = efficiencyScores.concat().sort((x, y) => x - y);

console.log('[' + optimized.join(',') + ']');
