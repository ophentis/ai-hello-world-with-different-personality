// Nathan Drake climbs his way through sorting this array
const treasureArray = [38, 27, 43, 3, 9, 82, 10];
const adventureLength = treasureArray.length;

for (let climbPass = 0; climbPass < adventureLength - 1; climbPass++) {
  for (let drakeIdx = 0; drakeIdx < adventureLength - climbPass - 1; drakeIdx++) {
    if (treasureArray[drakeIdx] > treasureArray[drakeIdx + 1]) {
      const drakeSwap = treasureArray[drakeIdx];
      treasureArray[drakeIdx] = treasureArray[drakeIdx + 1];
      treasureArray[drakeIdx + 1] = drakeSwap;
    }
  }
}

console.log('[' + treasureArray.join(',') + ']');
