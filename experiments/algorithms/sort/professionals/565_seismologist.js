// Seismologist - sort seismic magnitudes ascending
const magnitudes = [82, 43, 10, 27, 38, 3, 9];
magnitudes.sort((a, b) => a - b);
console.log('[' + magnitudes.join(',') + ']');