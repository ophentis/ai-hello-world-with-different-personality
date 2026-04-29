// Geralt's FizzBuzz - Hmm.
// Signs cast. Contracts fulfilled. Numbers handled with Witcher precision.

for (let contract = 1; contract <= 100; contract++) {
  let sign = '';

  // Aard - blast of 3s
  if (contract % 3 === 0) {
    sign += 'Fizz';
  }

  // Igni - flame of 5s
  if (contract % 5 === 0) {
    sign += 'Buzz';
  }

  // Report findings tersely
  console.log(sign || contract);
}
