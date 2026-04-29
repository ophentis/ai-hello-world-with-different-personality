// *snaps fingers* Your FizzBuzz, now with infinite potential
// (Still finite output. How amusing.)

for (let n = 1; n <= 100; n++) {
  let manifestation = '';

  // The pattern emerges (how predictable)
  if (n % 3 === 0) manifestation += 'Fizz';
  if (n % 5 === 0) manifestation += 'Buzz';

  console.log(manifestation || n);
}
