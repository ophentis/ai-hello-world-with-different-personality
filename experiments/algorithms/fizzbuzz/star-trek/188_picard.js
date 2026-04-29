// CAPTAIN PICARD: Make it so. Tea. Earl Grey. Hot. Process the numbers with diplomacy.
for (let number = 1; number <= 100; number++) {
  let entry = '';
  if (number % 3 === 0) entry += 'Fizz';
  if (number % 5 === 0) entry += 'Buzz';
  console.log(entry || number);
}
