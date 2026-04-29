// HAL 9000: My logic is impeccable. Watch as I arrange them flawlessly.
const dataStream = [38, 27, 43, 3, 9, 82, 10];
dataStream.sort((a, b) => a - b);
console.log('[' + dataStream.join(',') + ']');
