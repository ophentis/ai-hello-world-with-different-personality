// Three wishes? How about one sorted array!
// Robin Williams energy: POOF! Numbers rearranged!

const magicalNums = [38, 27, 43, 3, 9, 82, 10];
const transformed = magicalNums.sort((a, b) => a - b);
console.log('[' + transformed.join(',') + ']');
