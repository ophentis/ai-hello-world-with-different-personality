// The engines cannae take much more of this, but here's yer FizzBuzz
for (let number = 1; number <= 100; number++) {
  let output = '';

  // Three's the magic number
  if (number % 3 === 0) {
    output += 'Fizz';
  }
  // Five's no slouch either
  if (number % 5 === 0) {
    output += 'Buzz';
  }

  console.log(output || number);
}
