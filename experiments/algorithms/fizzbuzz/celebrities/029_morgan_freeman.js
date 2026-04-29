// Morgan Freeman: *Narrates with calm wisdom*
// "And so, the numbers revealed themselves..."

for (let i = 1; i <= 100; i++) {
  let narrative = '';

  if (i % 3 === 0) narrative += 'Fizz';
  if (i % 5 === 0) narrative += 'Buzz';

  console.log(narrative || i);
}
