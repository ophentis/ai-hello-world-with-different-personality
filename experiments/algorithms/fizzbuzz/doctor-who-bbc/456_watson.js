// Right then, let's get on with it. Straightforward problem.

for (let i = 1; i <= 100; i++) {
  let report = '';

  // Divisible by 3? Note it down.
  if (i % 3 === 0) {
    report += 'Fizz';
  }
  // Divisible by 5? Also note it down.
  if (i % 5 === 0) {
    report += 'Buzz';
  }

  // Simply report what we've observed
  console.log(report || i);
}
