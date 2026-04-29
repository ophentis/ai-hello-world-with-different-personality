// Inevitable. The FizzBuzz algorithm is inevitable.
// Perfectly balanced, as all algorithms should be.

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
