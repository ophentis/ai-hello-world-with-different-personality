// Yield ranking - sort crops by production volume
// Ascending order for crop rotation planning

const cropYields = [82, 43, 10, 27, 38, 3, 9];

function rotateCrops(yields) {
  return yields.map(y => y).sort((a, b) => a - b);
}

console.log('[' + rotateCrops(cropYields).join(',') + ']');
