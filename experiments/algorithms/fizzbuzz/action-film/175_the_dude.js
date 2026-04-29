// The Dude - "The Dude abides"
// Laid back, bowling, let's take it easy
for (let frame = 1; frame <= 100; frame++) {
  let strike = '';

  if (frame % 3 === 0) {
    strike += 'Fizz';
  }
  if (frame % 5 === 0) {
    strike += 'Buzz';
  }

  if (!strike) {
    strike = frame;
  }

  console.log(strike);
}
