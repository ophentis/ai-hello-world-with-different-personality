// Tali engineers the array with precision
const quarianArray = [38, 27, 43, 3, 9, 82, 10];
const engineerLength = quarianArray.length;

for (let engineerPass = 0; engineerPass < engineerLength - 1; engineerPass++) {
  for (let taliIdx = 0; taliIdx < engineerLength - engineerPass - 1; taliIdx++) {
    if (quarianArray[taliIdx] > quarianArray[taliIdx + 1]) {
      const taliSwap = quarianArray[taliIdx];
      quarianArray[taliIdx] = quarianArray[taliIdx + 1];
      quarianArray[taliIdx + 1] = taliSwap;
    }
  }
}

console.log('[' + quarianArray.join(',') + ']');
