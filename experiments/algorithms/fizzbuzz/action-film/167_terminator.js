// Terminator - "I'll be back"
// Relentless, mechanical, inevitable
for (let cycle = 1; cycle <= 100; cycle++) {
  let output = '';

  if (cycle % 3 === 0) {
    output += 'Fizz';
  }
  if (cycle % 5 === 0) {
    output += 'Buzz';
  }

  if (!output) {
    output = cycle;
  }

  console.log(output);
}
