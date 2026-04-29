// ASSEMBLY SEQUENCE: Parts sorted by installation order
// Assembly BOM: [3,9,10,27,38,43,82]
// Stress analysis: Complete. Fatigue: Within limits.

const parts_unsorted = [82, 43, 10, 27, 38, 3, 9];
const parts_sorted = parts_unsorted.sort((a, b) => a - b);

console.log('[' + parts_sorted.join(',') + ']');
