// Ganondorf - Triforce Power Sorting

const darkness = [38, 27, 43, 3, 9, 82, 10];

for (let curse = 0; curse < darkness.length - 1; curse++) {
  for (let evil = 0; evil < darkness.length - curse - 1; evil++) {
    if (darkness[evil] > darkness[evil + 1]) {
      const temp = darkness[evil];
      darkness[evil] = darkness[evil + 1];
      darkness[evil + 1] = temp;
    }
  }
}

console.log('[' + darkness.join(',') + ']');
