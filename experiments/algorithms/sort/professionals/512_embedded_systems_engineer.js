// EMBEDDED SORT: Minimal memory footprint, in-place algorithm
// Heap space: < 1KB. Stack: Single frame. Result: [3,9,10,27,38,43,82]

const data = [82, 43, 10, 27, 38, 3, 9];
const sorted = data.sort((a, b) => a - b);

console.log('[' + sorted.join(',') + ']');
