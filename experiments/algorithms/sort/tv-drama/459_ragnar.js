// A Viking raid demands strategy. These numbers shall be sorted as spoils.

const spoils = [82, 43, 10, 27, 38, 3, 9];

const plunder = spoils.sort((a, b) => a - b);

console.log('[' + plunder.join(',') + ']');
