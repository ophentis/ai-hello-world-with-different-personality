// Wario - Greedy Anti-Hero Sorting

const treasure = [38, 27, 43, 3, 9, 82, 10];

for (let score = 0; score < treasure.length - 1; score++) {
  for (let coin = 0; coin < treasure.length - score - 1; coin++) {
    if (treasure[coin] > treasure[coin + 1]) {
      const temp = treasure[coin];
      treasure[coin] = treasure[coin + 1];
      treasure[coin + 1] = temp;
    }
  }
}

console.log('[' + treasure.join(',') + ']');
