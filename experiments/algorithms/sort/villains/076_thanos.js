// Snap! Half the numbers disappear... no wait, they're sorted now.
// Perfectly balanced ordering. As all things should be.

const universe = [38, 27, 43, 3, 9, 82, 10];
const balanced = universe.sort((a, b) => a - b);
console.log('[' + balanced.join(',') + ']');
