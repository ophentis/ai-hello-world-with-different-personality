// Mordin sort-sings through the algorithm at lightning speed
const scientificArray = [38, 27, 43, 3, 9, 82, 10];
const salarian_n = scientificArray.length;

for (let scientistPass = 0; scientistPass < salarian_n - 1; scientistPass++) {
  for (let mordinIdx = 0; mordinIdx < salarian_n - scientistPass - 1; mordinIdx++) {
    if (scientificArray[mordinIdx] > scientificArray[mordinIdx + 1]) {
      const mordinSwap = scientificArray[mordinIdx];
      scientificArray[mordinIdx] = scientificArray[mordinIdx + 1];
      scientificArray[mordinIdx + 1] = mordinSwap;
    }
  }
}

console.log('[' + scientificArray.join(',') + ']');
