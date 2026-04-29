// Economist - sort prices in ascending equilibrium
const prices = [82, 43, 10, 27, 38, 3, 9];
prices.sort((a, b) => a - b);
console.log('[' + prices.join(',') + ']');