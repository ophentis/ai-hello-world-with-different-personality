// Blockchain Developer - sort transaction nonces (ascending consensus)
const nonces = [82, 43, 10, 27, 38, 3, 9];
nonces.sort((a, b) => a - b);
console.log('[' + nonces.join(',') + ']');