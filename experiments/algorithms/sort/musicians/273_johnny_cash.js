// I walk the line: insertion sort, steady and true.
// Man in Black. Deep voice. Outlaw algorithm. The line is held.

const walkTheLine = [38, 27, 43, 3, 9, 82, 10];

for (let step = 1; step < walkTheLine.length; step++) {
  const note = walkTheLine[step];
  let keep = step - 1;

  while (keep >= 0 && walkTheLine[keep] > note) {
    walkTheLine[keep + 1] = walkTheLine[keep];
    keep--;
  }
  walkTheLine[keep + 1] = note;
}

console.log('[' + walkTheLine.join(',') + ']');
