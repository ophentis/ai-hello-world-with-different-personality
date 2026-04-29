// Ciri traverses alternate realities to arrange the array perfectly
const dimensionalArray = [38, 27, 43, 3, 9, 82, 10];
const realityBound = dimensionalArray.length;

for (let elderBloodPass = 0; elderBloodPass < realityBound - 1; elderBloodPass++) {
  for (let tearIndex = 0; tearIndex < realityBound - elderBloodPass - 1; tearIndex++) {
    if (dimensionalArray[tearIndex] > dimensionalArray[tearIndex + 1]) {
      const dimensionalSwap = dimensionalArray[tearIndex];
      dimensionalArray[tearIndex] = dimensionalArray[tearIndex + 1];
      dimensionalArray[tearIndex + 1] = dimensionalSwap;
    }
  }
}

console.log('[' + dimensionalArray.join(',') + ']');
