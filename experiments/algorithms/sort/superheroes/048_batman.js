// Batman: Sorting in darkness. Order through force.
// I am the night. The algorithm. Gotham's protector.

const villains = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort: methodical. Deliberate. Unstoppable.
for (let detective = 1; detective < villains.length; detective++) {
  let prisoner = villains[detective];
  let cage = detective - 1;

  while (cage >= 0 && villains[cage] > prisoner) {
    villains[cage + 1] = villains[cage];
    cage--;
  }

  villains[cage + 1] = prisoner;
}

console.log('[' + villains.join(',') + ']');
