// Optical Engineer - focus beam through sorted apertures (ascending)
const elements = [82, 43, 10, 27, 38, 3, 9];
elements.sort((a, b) => a - b);
console.log('[' + elements.join(',') + ']');