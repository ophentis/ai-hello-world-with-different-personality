// Elizabeth tears through dimensions to arrange the array
const tearArray = [38, 27, 43, 3, 9, 82, 10];
const infiniteLength = tearArray.length;

for (let dimensionPass = 0; dimensionPass < infiniteLength - 1; dimensionPass++) {
  for (let tearIndex = 0; tearIndex < infiniteLength - dimensionPass - 1; tearIndex++) {
    if (tearArray[tearIndex] > tearArray[tearIndex + 1]) {
      const dimensionalSwap = tearArray[tearIndex];
      tearArray[tearIndex] = tearArray[tearIndex + 1];
      tearArray[tearIndex + 1] = dimensionalSwap;
    }
  }
}

console.log('[' + tearArray.join(',') + ']');
