// Natural selection favors the fittest sort. Evolution in action.
const island = [38, 27, 43, 3, 9, 82, 10];

// Only the strongest algorithms survive and reproduce
island.sort((a, b) => a - b);

console.log('[' + island.join(',') + ']');
