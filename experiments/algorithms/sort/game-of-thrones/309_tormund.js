// Tormund: Wildling brute force, thunderous and loud
const wildlings = [38, 27, 43, 3, 9, 82, 10];

// Loud and boisterous bubble sort
let swapped = true;
while (swapped) {
  swapped = false;
  for (let i = 0; i < wildlings.length - 1; i++) {
    if (wildlings[i] > wildlings[i + 1]) {
      let boom = wildlings[i];
      wildlings[i] = wildlings[i + 1];
      wildlings[i + 1] = boom;
      swapped = true;
    }
  }
}

console.log('[' + wildlings.join(',') + ']');
