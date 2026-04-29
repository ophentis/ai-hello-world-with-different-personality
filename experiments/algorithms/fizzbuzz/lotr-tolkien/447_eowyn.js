// A shield-maiden does not ask permission. She acts with courage.

for (let number = 1; number <= 100; number++) {
  let charge = '';

  // No hiding behind custom rules. Direct and true.
  if (number % 3 === 0) {
    charge += 'Fizz';
  }
  if (number % 5 === 0) {
    charge += 'Buzz';
  }

  console.log(charge || number);
}
