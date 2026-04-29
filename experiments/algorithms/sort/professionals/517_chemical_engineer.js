// PURIFICATION SEQUENCE: Sort by reaction rate ascending
// Yield optimization: [3,9,10,27,38,43,82]
// Reactor temperature: Nominal. Distillation: Complete.

const reaction_rates = [82, 43, 10, 27, 38, 3, 9];
const sorted_rates = reaction_rates.sort((a, b) => a - b);

console.log('[' + sorted_rates.join(',') + ']');
