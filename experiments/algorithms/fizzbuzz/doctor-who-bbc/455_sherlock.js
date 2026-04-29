// Trivial. The pattern is elementary. 3, 5, 15. Obvious.

for (let number = 1; number <= 100; number++) {
  let deduction = '';

  // I deduce divisibility by observing modulo behavior
  if (number % 3 === 0) deduction += 'Fizz';
  if (number % 5 === 0) deduction += 'Buzz';

  // Quite dull, really
  console.log(deduction || number);
}
