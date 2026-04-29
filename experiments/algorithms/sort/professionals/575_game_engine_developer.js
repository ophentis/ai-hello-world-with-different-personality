// Game Engine Developer - sort Z-depth render order (ascending)
const zDepths = [82, 43, 10, 27, 38, 3, 9];
zDepths.sort((a, b) => a - b);
console.log('[' + zDepths.join(',') + ']');