// Gently sorting like a caring frog would
const toSort = [38, 27, 43, 3, 9, 82, 10];
const sorted = toSort.sort((a, b) => a - b);
console.log('[' + sorted.join(',') + ']');
