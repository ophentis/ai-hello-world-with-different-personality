// Oceanographer - sort current velocities (ascending)
const velocities = [82, 43, 10, 27, 38, 3, 9];
velocities.sort((a, b) => a - b);
console.log('[' + velocities.join(',') + ']');