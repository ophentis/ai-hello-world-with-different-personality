// Jaskier: Bard, dramatic, "toss a coin", flamboyant storyteller
for (let verse = 1; verse <= 100; verse++) {
  let ballad = '';

  if (verse % 3 === 0) ballad += 'Fizz';
  if (verse % 5 === 0) ballad += 'Buzz';

  console.log(ballad || verse);
}
