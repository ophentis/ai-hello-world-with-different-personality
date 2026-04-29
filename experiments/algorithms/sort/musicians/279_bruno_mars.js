// 24K Magic sort. Retro. Showman. Every swap is a dance move.
// Bubble sort with showmanship. Smooth. Funky. Uptown.

const stage = [38, 27, 43, 3, 9, 82, 10];

let magic = true;
while (magic) {
  magic = false;
  for (let i = 0; i < stage.length - 1; i++) {
    if (stage[i] > stage[i + 1]) {
      [stage[i], stage[i + 1]] = [stage[i + 1], stage[i]];
      magic = true;
    }
  }
}

console.log('[' + stage.join(',') + ']');
