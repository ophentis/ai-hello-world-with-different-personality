// Sorting, much like ogres, has layers
// First ye do this, then ye do that, then ye've got order

const swampNums = [38, 27, 43, 3, 9, 82, 10];
const sorted = swampNums.sort((a, b) => a - b);
console.log('[' + sorted.join(',') + ']');
