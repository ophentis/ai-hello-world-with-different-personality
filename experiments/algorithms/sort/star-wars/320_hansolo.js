// No need to follow protocol—just use what works
const unsorted = [38, 27, 43, 3, 9, 82, 10];
unsorted.sort((a, b) => a - b);
console.log('[' + unsorted.join(',') + ']');
