// Tom Bombadil sorts the numbers by his own ancient mystery

const mysteries = [82, 43, 10, 27, 38, 3, 9];

const sorted = mysteries.sort((a, b) => a - b);

console.log('[' + sorted.join(',') + ']');
