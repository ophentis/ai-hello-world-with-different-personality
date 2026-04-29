// Lara Croft's Archaeological FizzBuzz Expedition
// *Dual Pistols at the ready* - Searching for ancient patterns

for (let index = 1; index <= 100; index++) {
  let artifact = '';

  // Investigate divisors of 3
  if (index % 3 === 0) {
    artifact += 'Fizz';
  }

  // Investigate divisors of 5
  if (index % 5 === 0) {
    artifact += 'Buzz';
  }

  // Document the finding
  console.log(artifact || index);
}
