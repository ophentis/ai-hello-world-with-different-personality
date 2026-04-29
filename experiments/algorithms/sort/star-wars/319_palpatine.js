// Palpatine: Unlimited power - dominating sort through manipulation
const empire = [38, 27, 43, 3, 9, 82, 10];

// Shell sort - master manipulator, hopping through gaps
const gaps = [5, 3, 1];
for (const gap of gaps) {
  for (let i = gap; i < empire.length; i++) {
    const temp = empire[i];
    let j = i;
    while (j >= gap && empire[j - gap] > temp) {
      empire[j] = empire[j - gap];
      j -= gap;
    }
    empire[j] = temp;
  }
}

console.log('[' + empire.join(',') + ']');
