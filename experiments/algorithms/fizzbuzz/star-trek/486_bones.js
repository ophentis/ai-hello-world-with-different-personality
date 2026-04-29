// Dammit Jim, I'm a doctor, not a programmer! But here's your FizzBuzz.
for (let n = 1; n <= 100; n++) {
  let result = '';

  // The blasted algorithm demands it
  if (n % 3 === 0) {
    result += 'Fizz';
  }
  if (n % 5 === 0) {
    result += 'Buzz';
  }

  console.log(result || n);
}
