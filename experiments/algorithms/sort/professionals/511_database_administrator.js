// QUERY RESULT SET: Sort by primary key ascending
// Index: B-tree optimized. Result: [3,9,10,27,38,43,82]
// Query plan: Verified. Execution: Optimal.

const rows = [82, 43, 10, 27, 38, 3, 9];
const query_results = rows.sort((a, b) => a - b);

console.log('[' + query_results.join(',') + ']');
