// Edgar Allan Poe: Dark murmurings from the abyss
// Nevermore shall these numbers pass unheeded

for (let doomCycle = 1; doomCycle <= 100; doomCycle++) {
  let utterance = '';

  // The raven caws thrice
  if (doomCycle % 3 === 0) {
    utterance = 'Fizz';
  }

  // Five bells toll in the crypt
  if (doomCycle % 5 === 0) {
    utterance += 'Buzz';
  }

  // Or echoes remain
  if (!utterance) {
    utterance = doomCycle;
  }

  console.log(utterance);
}
