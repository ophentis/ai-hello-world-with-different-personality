// Frequency response - sort by absorption coefficient
// Ascending order for room treatment design

const absorptionCoeff = [82, 43, 10, 27, 38, 3, 9];

const roomDesign = absorptionCoeff
  .slice()
  .sort((freq1, freq2) => freq1 - freq2);

console.log('[' + roomDesign.join(',') + ']');
