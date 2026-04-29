// A potion master does not merely throw ingredients together
// Each element must be precisely positioned. Always.

const unsorted = [38, 27, 43, 3, 9, 82, 10];
const sorted = unsorted.sort((a, b) => a - b);
console.log('[' + sorted.join(',') + ']');
