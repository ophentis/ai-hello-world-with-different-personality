// A protest song in code. Bubble sort: let it bubble. Let the system expose itself.
// How many passes does it take? As many as it takes until the people are free.

const revolution = [38, 27, 43, 3, 9, 82, 10];

let changed = true;
let passCount = 0;

while (changed) {
  changed = false;
  for (let i = 0; i < revolution.length - 1 - passCount; i++) {
    if (revolution[i] > revolution[i + 1]) {
      [revolution[i], revolution[i + 1]] = [revolution[i + 1], revolution[i]];
      changed = true;
    }
  }
  passCount++;
}

console.log('[' + revolution.join(',') + ']');
