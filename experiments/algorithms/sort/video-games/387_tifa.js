// Tifa - Strong and Capable Sorting

const hearts = [38, 27, 43, 3, 9, 82, 10];

for (let strength = 0; strength < hearts.length - 1; strength++) {
  for (let beat = 0; beat < hearts.length - strength - 1; beat++) {
    if (hearts[beat] > hearts[beat + 1]) {
      const temp = hearts[beat];
      hearts[beat] = hearts[beat + 1];
      hearts[beat + 1] = temp;
    }
  }
}

console.log('[' + hearts.join(',') + ']');
