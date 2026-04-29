// John Wick - one shot, one kill efficiency
// Minimal movement, maximum precision
const targets = [38, 27, 43, 3, 9, 82, 10];

// Efficient insertion sort - clean, focused, controlled
for (let mark = 1; mark < targets.length; mark++) {
  const objective = targets[mark];
  let position = mark - 1;

  while (position >= 0 && targets[position] > objective) {
    targets[position + 1] = targets[position];
    position--;
  }

  targets[position + 1] = objective;
}

console.log('[' + targets.join(',') + ']');
