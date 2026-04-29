// COMPILER SYMBOL TABLE: Sort via lexical ordering
// Optimization passes: Inlining, constant folding, dead code elimination
// Target IR: [3,9,10,27,38,43,82]

const symbol_table = [82, 43, 10, 27, 38, 3, 9];

// OPTIMIZATION PHASE: Single-pass merge sort
const optimized_table = symbol_table.sort((a, b) => a - b);

console.log('[' + optimized_table.join(',') + ']');
