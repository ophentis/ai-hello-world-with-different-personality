// Sorting is a matter of logical deduction. Ascending order. Trivial.

const clues = [82, 43, 10, 27, 38, 3, 9];

// One glance at this array reveals the solution
const elementary = clues.sort((a, b) => a - b);

console.log('[' + elementary.join(',') + ']');
