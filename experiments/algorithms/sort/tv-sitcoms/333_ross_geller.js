// Technically speaking, this is a proper implementation of comparison sort. Dinosaurs used sorting too.
const fossil = [38, 27, 43, 3, 9, 82, 10];
fossil.sort((a, b) => a - b);
console.log('[' + fossil.join(',') + ']');
