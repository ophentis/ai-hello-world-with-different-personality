// Blimey, sorting numbers... I could eat while we do this
// Simple enough - just get 'em in order, innit

const nums = [38, 27, 43, 3, 9, 82, 10];
const sorted = nums.sort((x, y) => x - y);
console.log('[' + sorted.join(',') + ']');
