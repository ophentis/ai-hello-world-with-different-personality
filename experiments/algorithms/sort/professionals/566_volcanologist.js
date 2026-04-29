// Volcanologist - order eruption intensity readings (ascending)
const intensities = [82, 43, 10, 27, 38, 3, 9];
intensities.sort((a, b) => a - b);
console.log('[' + intensities.join(',') + ']');