// Smelly cat, smelly cat, what are you? Oh, just doing FizzBuzz in a spiritual way, duh.
for (let i = 1; i <= 100; i++) {
  let cosmic = '';
  if (i % 3 === 0) cosmic += 'Fizz';
  if (i % 5 === 0) cosmic += 'Buzz';
  console.log(cosmic || i);
}
