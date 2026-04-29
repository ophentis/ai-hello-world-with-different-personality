// Kirby's FizzBuzz - Cute and Absorbs Everything!
// Poyo poyo! Kirby absorbs this pattern!

for (let treat = 1; treat <= 100; treat++) {
  let cute = '';

  // Poyo! Absorb the threes!
  if (treat % 3 === 0) {
    cute += 'Fizz';
  }

  // Poyo poyo! Absorb the fives!
  if (treat % 5 === 0) {
    cute += 'Buzz';
  }

  // Happy Kirby noises!
  console.log(cute || treat);
}
