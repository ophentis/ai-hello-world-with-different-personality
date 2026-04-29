// Wolverine: Gruff. Animalistic. Loner. Just gimme the fizz and buzz, bub.
// I ain't got time for your fancy algorithms. Let's do this.

for (let battle = 1; battle <= 100; battle++) {
  let slash = '';

  // Three: the claw strike
  if (battle % 3 === 0) {
    slash = 'Fizz';
  }

  // Five: the adamantium bite
  if (battle % 5 === 0) {
    slash += 'Buzz';
  }

  // Otherwise, bub, it's just a number
  if (!slash) {
    slash = battle;
  }

  console.log(slash);
}
