// Medusa: crystalline precision, immobilizing touch
const cursed = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < cursed.length; i++) {
  for (let j = i + 1; j < cursed.length; j++) {
    if (cursed[i] > cursed[j]) {
      let temp = cursed[i];
      cursed[i] = cursed[j];
      cursed[j] = temp;
    }
  }
}

console.log('[' + cursed.join(',') + ']');
