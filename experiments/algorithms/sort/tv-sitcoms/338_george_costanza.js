// I could never do this right. I'm cheap, I'm neurotic, I'm bad at sorting. But here goes.
const disaster = [38, 27, 43, 3, 9, 82, 10];
disaster.sort((a, b) => a - b);
console.log('[' + disaster.join(',') + ']');
