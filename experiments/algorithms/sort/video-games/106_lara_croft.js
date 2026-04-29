// Lara Croft's Adventure Sort - Organizing ancient treasures!
// *Acrobatic backflip* - Precision meets adventure

const treasureNumbers = [38, 27, 43, 3, 9, 82, 10];

// Shell sort - Exploring gaps like tomb passages
const gap = (n) => {
  let h = 1;
  while (h < n / 3) h = 3 * h + 1;
  return h;
};

let gapSequence = gap(treasureNumbers.length);

while (gapSequence > 0) {
  for (let i = gapSequence; i < treasureNumbers.length; i++) {
    let temp = treasureNumbers[i];
    let j = i;
    while (j >= gapSequence && treasureNumbers[j - gapSequence] > temp) {
      treasureNumbers[j] = treasureNumbers[j - gapSequence];
      j -= gapSequence;
    }
    treasureNumbers[j] = temp;
  }
  gapSequence = Math.floor(gapSequence / 3);
}

console.log('[' + treasureNumbers.join(',') + ']');
