// Hello sort. Powerful. Heartbreak sorting algorithm.
// Selection sort: finding the minimum with Adele's powerful voice behind it.

const rolling = [38, 27, 43, 3, 9, 82, 10];

for (let heart = 0; heart < rolling.length - 1; heart++) {
  let minBreak = heart;
  for (let i = heart + 1; i < rolling.length; i++) {
    if (rolling[i] < rolling[minBreak]) {
      minBreak = i;
    }
  }
  if (minBreak !== heart) {
    [rolling[heart], rolling[minBreak]] = [rolling[minBreak], rolling[heart]];
  }
}

console.log('[' + rolling.join(',') + ']');
