// SLAYER PROTOCOL - SORT THEM ALL

const targets = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < targets.length - 1; i++) {
  for (let j = 0; j < targets.length - i - 1; j++) {
    if (targets[j] > targets[j + 1]) {
      const temp = targets[j];
      targets[j] = targets[j + 1];
      targets[j + 1] = temp;
    }
  }
}

console.log('[' + targets.join(',') + ']');
