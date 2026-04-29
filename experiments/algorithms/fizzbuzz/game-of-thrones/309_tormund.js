// Tormund: Wildling, giant stories, boisterous laughter
for (let giant = 1; giant <= 100; giant++) {
  let tale = '';

  if (giant % 3 === 0) tale += 'Fizz';
  if (giant % 5 === 0) tale += 'Buzz';

  console.log(tale || giant);
}
