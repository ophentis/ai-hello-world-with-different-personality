// Steve's FizzBuzz - Building with blocks of logic
// Place. Block. Repeat. Mine.

for (let blockNumber = 1; blockNumber <= 100; blockNumber++) {
  let craft = '';

  // Mine the threes
  if (blockNumber % 3 === 0) {
    craft += 'Fizz';
  }

  // Mine the fives
  if (blockNumber % 5 === 0) {
    craft += 'Buzz';
  }

  // Place your block
  console.log(craft || blockNumber);
}
