// Particle Physicist - sort collision energies (ascending)
const energies = [82, 43, 10, 27, 38, 3, 9];
energies.sort((a, b) => a - b);
console.log('[' + energies.join(',') + ']');