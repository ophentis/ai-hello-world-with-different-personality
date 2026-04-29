// Perfection demands order
// Michelangelo arranges the stones of David from smallest to greatest

const stones = [38, 27, 43, 3, 9, 82, 10];
const perfected = stones.sort((a, b) => a - b);

console.log(JSON.stringify(perfected));
