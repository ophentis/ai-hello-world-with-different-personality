// Rasputin's resilience - try to kill this algorithm with poison, it survives
// Comb sort - brutal, jagged, hard to destroy

const cursed = [38, 27, 43, 3, 9, 82, 10];
let gapSize = cursed.length;
let swapped = true;

while (gapSize > 1 || swapped) {
  gapSize = Math.max(1, Math.floor(gapSize / 1.3));
  swapped = false;

  for (let i = 0; i + gapSize < cursed.length; i++) {
    if (cursed[i] > cursed[i + gapSize]) {
      [cursed[i], cursed[i + gapSize]] = [cursed[i + gapSize], cursed[i]];
      swapped = true;
    }
  }
}

console.log('[' + cursed.join(',') + ']');
