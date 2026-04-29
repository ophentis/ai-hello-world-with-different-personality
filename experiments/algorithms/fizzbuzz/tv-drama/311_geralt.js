// Geralt: "Hmm" - terse, witcher, monster hunter, minimal speech
for (let hunt = 1; hunt <= 100; hunt++) {
  let track = '';

  if (hunt % 3 === 0) track += 'Fizz';
  if (hunt % 5 === 0) track += 'Buzz';

  console.log(track || hunt);
}
