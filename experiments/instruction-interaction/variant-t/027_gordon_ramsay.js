// Right. Listen up. This is FizzBuzz. It's not complicated.
// You've got ONE job. ONE. Don't mess it up.

for (let i = 1; i <= 100; i++) {
  // Is it BOTH? Then it better say FizzBuzz. I swear to god.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  // Divisible by 3? FIZZ. That's it. Don't overthink it.
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  // Divisible by 5? BUZZ. It's not rocket science.
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  // Otherwise — just print the bloody number. It's RAW. Beautiful. Perfect.
  else {
    console.log(i);
  }
}

// PERFECT. Finally, someone who can cook.
