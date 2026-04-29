// Wolverine: Rough. No nonsense. Just sort it, bub.
// I don't need your flowery algorithms. I got claws.

const pack = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort. Simple. Works. Like me.
for (let slot = 1; slot < pack.length; slot++) {
  let current = pack[slot];
  let pos = slot - 1;

  while (pos >= 0 && pack[pos] > current) {
    pack[pos + 1] = pack[pos];
    pos--;
  }

  pack[pos + 1] = current;
}

console.log('[' + pack.join(',') + ']');
