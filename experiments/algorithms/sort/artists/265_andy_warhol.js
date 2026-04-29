// Pop art sorting. Repetitive. Mass-produced. Beautiful in its mechanical efficiency.
// Bubble sort: same stroke repeated, repeated, repeated until sorted. Factory output.

const cans = [38, 27, 43, 3, 9, 82, 10];

let swapped = true;
while (swapped) {
  swapped = false;
  for (let i = 0; i < cans.length - 1; i++) {
    if (cans[i] > cans[i + 1]) {
      [cans[i], cans[i + 1]] = [cans[i + 1], cans[i]];
      swapped = true;
    }
  }
}

console.log('[' + cans.join(',') + ']');
