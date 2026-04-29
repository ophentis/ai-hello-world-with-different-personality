// Luigi's nervous FizzBuzz - worried but capable!
// M-m-mamma mia, let me just work through this...

for (let i = 1; i <= 100; i++) {
  let output = '';

  // Check for 3... hope I get it right
  if (i % 3 === 0) {
    output += 'Fizz';
  }

  // And 5... okay, here goes nothing...
  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // Just print the number, nervous but sure
  console.log(output || i);
}
