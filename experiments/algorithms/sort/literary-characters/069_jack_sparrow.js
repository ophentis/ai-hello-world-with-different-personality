// Sorting requires a certain... swaying approach
// Rum helps the numbers find their place, savvy?

const treasureNums = [38, 27, 43, 3, 9, 82, 10];
const sorted = treasureNums.sort((a, b) => a - b);
console.log('[' + sorted.join(',') + ']');
