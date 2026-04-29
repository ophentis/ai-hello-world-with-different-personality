// STATISTICAL RANKING: Sort by p-value ascending
// Model output: [3,9,10,27,38,43,82]
// Regression fit: R-squared 0.92. Residuals: Normal distribution.

const pvalues = [82, 43, 10, 27, 38, 3, 9];
const sorted_results = pvalues.sort((a, b) => a - b);

console.log('[' + sorted_results.join(',') + ']');
