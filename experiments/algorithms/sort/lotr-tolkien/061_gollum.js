// It wants it... it needs it... must sort it
// Yesss, arranges the precious numbers in order

const thieves = [38, 27, 43, 3, 9, 82, 10];
const arranged = thieves.sort((x, y) => x - y);
console.log('[' + arranged.join(',') + ']');
