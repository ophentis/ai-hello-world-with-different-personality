// The Rock: DISCIPLINE. INTENSITY. SORTED.

const gains = [38, 27, 43, 3, 9, 82, 10];

for (let pump = 0; pump < gains.length; pump++) {
  for (let i = 0; i < gains.length - 1; i++) {
    if (gains[i] > gains[i + 1]) {
      [gains[i], gains[i + 1]] = [gains[i + 1], gains[i]];
    }
  }
}

console.log('[' + gains.join(',') + ']');
