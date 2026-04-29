// I am Groot. I am Groot. I am Groot FizzBuzz.
// I am Groot Fizz. I am Groot Buzz.

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
