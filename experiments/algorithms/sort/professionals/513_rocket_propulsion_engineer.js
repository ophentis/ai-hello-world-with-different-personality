// STAGING SEQUENCE: Sort by burnout order
// ISP differential: Optimized. Target staging: [3,9,10,27,38,43,82]
// Separation events: Triggered. Apogee: Achieved.

const stage_deltas = [82, 43, 10, 27, 38, 3, 9];
const sorted_stages = stage_deltas.sort((a, b) => a - b);

console.log('[' + sorted_stages.join(',') + ']');
