// Mark Twain: Sortation with a sardonic chuckle
// Any fool can sort; it takes wit to sort with style

const critters = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort with commentary—we go 'round and 'round like the Mississippi
for (let pass = 0; pass < critters.length; pass++) {
  for (let spot = 0; spot < critters.length - 1 - pass; spot++) {
    if (critters[spot] > critters[spot + 1]) {
      // Swap 'em like trading positions on a riverboat
      let tmp = critters[spot];
      critters[spot] = critters[spot + 1];
      critters[spot + 1] = tmp;
    }
  }
}

console.log('[' + critters.join(',') + ']');
