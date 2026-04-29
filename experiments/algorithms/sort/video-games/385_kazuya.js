// Kazuya - Perfect form

const opponents = [38, 27, 43, 3, 9, 82, 10];

for (let combo = 0; combo < opponents.length - 1; combo++) {
  for (let move = 0; move < opponents.length - combo - 1; move++) {
    if (opponents[move] > opponents[move + 1]) {
      const temp = opponents[move];
      opponents[move] = opponents[move + 1];
      opponents[move + 1] = temp;
    }
  }
}

console.log('[' + opponents.join(',') + ']');
