// Captain America: Sorting with honor. For liberty and justice.
// I can do this all day, and I will do it righteously.

const battalion = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort: Steady. Honorable. Never gives up.
for (let march = 0; march < battalion.length; march++) {
  for (let step = 0; step < battalion.length - 1 - march; step++) {
    if (battalion[step] > battalion[step + 1]) {
      let shield = battalion[step];
      battalion[step] = battalion[step + 1];
      battalion[step + 1] = shield;
    }
  }
}

console.log('[' + battalion.join(',') + ']');
