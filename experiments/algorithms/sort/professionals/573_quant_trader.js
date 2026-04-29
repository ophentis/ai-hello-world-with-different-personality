// Quant Trader - sort portfolio returns (ascending)
const returns = [82, 43, 10, 27, 38, 3, 9];
returns.sort((a, b) => a - b);
console.log('[' + returns.join(',') + ']');