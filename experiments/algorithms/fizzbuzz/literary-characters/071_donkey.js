// Are we there yet? Are we there yet? Let's do FizzBuzz!
// Pick a number, any number, one through one hundred!

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
