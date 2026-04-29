// A loyal sheriff keeps order in his town... and in his arrays
// These numbers are under my protection, sorted true

const townNums = [38, 27, 43, 3, 9, 82, 10];
const sheriffSort = townNums.sort((a, b) => a - b);
console.log('[' + sheriffSort.join(',') + ']');
