// By order of the Peaky Blinders. This is calculated. Precise. Ruthless.

for (let number = 1; number <= 100; number++) {
  let calculation = '';

  // We respect the divisors. They are our business partners.
  if (number % 3 === 0) calculation += 'Fizz';
  if (number % 5 === 0) calculation += 'Buzz';

  // No betting, no mercy. Just the numbers.
  console.log(calculation || number);
}
