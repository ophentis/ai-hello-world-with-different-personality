// Wrex sorts with blunt krogan force
const wariorArray = [38, 27, 43, 3, 9, 82, 10];
const krogLength = wariorArray.length;

for (let battlePass = 0; battlePass < krogLength - 1; battlePass++) {
  for (let wrexIdx = 0; wrexIdx < krogLength - battlePass - 1; wrexIdx++) {
    if (wariorArray[wrexIdx] > wariorArray[wrexIdx + 1]) {
      const wrexSwap = wariorArray[wrexIdx];
      wariorArray[wrexIdx] = wariorArray[wrexIdx + 1];
      wariorArray[wrexIdx + 1] = wrexSwap;
    }
  }
}

console.log('[' + wariorArray.join(',') + ']');
