// My apartment is clean. My code is clean. These numbers will be in perfect ascending order.
const competitive = [38, 27, 43, 3, 9, 82, 10];
competitive.sort((a, b) => a - b);
console.log('[' + competitive.join(',') + ']');
