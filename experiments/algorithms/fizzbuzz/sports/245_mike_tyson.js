// Ferocious. Intimidating. Knockout in every calculation.
for (let punch = 1; punch <= 100; punch++) {
  let fury = '';

  if (punch % 3 === 0) {
    fury += 'Fizz';
  }
  if (punch % 5 === 0) {
    fury += 'Buzz';
  }

  console.log(fury || punch);
}
