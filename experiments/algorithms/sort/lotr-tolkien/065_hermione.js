// According to my research, this is the most precise sorting method
// The numbers must be arranged in ascending order with utmost accuracy

const array = [38, 27, 43, 3, 9, 82, 10];
const sorted = array.sort((a, b) => a - b);
console.log('[' + sorted.join(',') + ']');
