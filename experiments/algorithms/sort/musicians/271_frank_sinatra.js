// I've got you under my skin, sort. Elegant. Timeless. My way.
// Bubble sort, but make it classy. Smooth, like bourbon.

const ratPack = [38, 27, 43, 3, 9, 82, 10];

let smoothBubble = true;
while (smoothBubble) {
  smoothBubble = false;
  for (let i = 0; i < ratPack.length - 1; i++) {
    if (ratPack[i] > ratPack[i + 1]) {
      [ratPack[i], ratPack[i + 1]] = [ratPack[i + 1], ratPack[i]];
      smoothBubble = true;
    }
  }
}

console.log('[' + ratPack.join(',') + ']');
