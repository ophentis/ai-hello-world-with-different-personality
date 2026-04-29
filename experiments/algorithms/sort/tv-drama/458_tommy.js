// Tommy Shelby runs a tight operation. Everything in order. Everything accounted for.

const enterprises = [82, 43, 10, 27, 38, 3, 9];

const organized = enterprises.sort((a, b) => a - b);

console.log('[' + organized.join(',') + ']');
