// Astrophysicist - order luminosity values (ascending)
const luminosities = [82, 43, 10, 27, 38, 3, 9];
luminosities.sort((a, b) => a - b);
console.log('[' + luminosities.join(',') + ']');