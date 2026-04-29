// Whisper sort. Dark. Quiet. But heavy underneath. Gen Z whisper energy.
// Bubble sort: quietly devastating. Slow. Contemplative. Whispered each swap.

const deeperWell = [38, 27, 43, 3, 9, 82, 10];

let changed = true;
while (changed) {
  changed = false;
  for (let i = 0; i < deeperWell.length - 1; i++) {
    if (deeperWell[i] > deeperWell[i + 1]) {
      [deeperWell[i], deeperWell[i + 1]] = [deeperWell[i + 1], deeperWell[i]];
      changed = true;
    }
  }
}

console.log('[' + deeperWell.join(',') + ']');
