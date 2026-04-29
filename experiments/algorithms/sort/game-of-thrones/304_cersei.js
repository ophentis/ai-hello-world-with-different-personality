// Cersei: Seize control, arrange enemies by threat level
const enemies = [38, 27, 43, 3, 9, 82, 10];

// Insertion sort - methodical control through manipulation
for (let i = 1; i < enemies.length; i++) {
  const key = enemies[i];
  let j = i - 1;

  while (j >= 0 && enemies[j] > key) {
    enemies[j + 1] = enemies[j];
    j--;
  }
  enemies[j + 1] = key;
}

console.log('[' + enemies.join(',') + ']');
