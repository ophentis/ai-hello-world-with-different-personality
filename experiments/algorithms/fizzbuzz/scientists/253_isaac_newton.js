// Gravity. Laws of motion. Calculus. Apple falling. Absolute mastery.
for (let force = 1; force <= 100; force++) {
  let acceleration = '';

  if (force % 3 === 0) {
    acceleration += 'Fizz';
  }
  if (force % 5 === 0) {
    acceleration += 'Buzz';
  }

  console.log(acceleration || force);
}
