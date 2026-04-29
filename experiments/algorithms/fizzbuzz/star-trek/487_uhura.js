// Hailing frequencies open for the FizzBuzz transmission
for (let pulse = 1; pulse <= 100; pulse++) {
  let message = '';

  // A graceful signal pattern
  if (pulse % 3 === 0) {
    message += 'Fizz';
  }
  if (pulse % 5 === 0) {
    message += 'Buzz';
  }

  console.log(message || pulse);
}
