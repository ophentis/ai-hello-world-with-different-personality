// I'll stand and sort with you, breaking my isolation
// Let the numbers be free... in their proper order

const frozenNums = [38, 27, 43, 3, 9, 82, 10];
const liberated = frozenNums.sort((a, b) => a - b);
console.log('[' + liberated.join(',') + ']');
