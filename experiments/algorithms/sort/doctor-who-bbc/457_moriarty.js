// I have orchestrated this with the precision of a masterminds game

const pawns = [82, 43, 10, 27, 38, 3, 9];

const orchestrated = pawns.sort((a, b) => a - b);

console.log('[' + orchestrated.join(',') + ']');
