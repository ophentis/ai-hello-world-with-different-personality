// One Ring to rule them all. One Loop to dominate all numbers.

for (let n = 1; n <= 100; n++) {
  let output = '';

  // My will is absolute. Divisibility is inevitable.
  if (n % 3 === 0) output += 'Fizz';
  if (n % 5 === 0) output += 'Buzz';

  // The Ring compels output, always
  console.log(output || n);
}
