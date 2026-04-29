// Plasma Physicist - order magnetic field strengths (ascending)
const fieldStrengths = [82, 43, 10, 27, 38, 3, 9];
fieldStrengths.sort((a, b) => a - b);
console.log('[' + fieldStrengths.join(',') + ']');