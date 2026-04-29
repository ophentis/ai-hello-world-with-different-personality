// Peach - Capable and Graceful Sorting

const crown = [38, 27, 43, 3, 9, 82, 10];

for (let jewel = 0; jewel < crown.length - 1; jewel++) {
  for (let sparkle = 0; sparkle < crown.length - jewel - 1; sparkle++) {
    if (crown[sparkle] > crown[sparkle + 1]) {
      const temp = crown[sparkle];
      crown[sparkle] = crown[sparkle + 1];
      crown[sparkle + 1] = temp;
    }
  }
}

console.log('[' + crown.join(',') + ']');
