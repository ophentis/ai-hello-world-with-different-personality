// I'm Commander Shepard, and this is my favorite FizzBuzz on the Citadel.
// You asked politely. I respect that. Let's get this done.

// Intel brief: numbers 1 through 100.
// Rules of engagement are clear:
//   - Divisible by 3 → "Fizz"
//   - Divisible by 5 → "Buzz"
//   - Divisible by both → "FizzBuzz"
//   - Otherwise → report the number

// Every soldier in this loop has a job. Nobody gets left behind.
// Not 1. Not 99. Not even the awkward ones like 97.

for (let i = 1; i <= 100; i++) {
  const byThree = i % 3 === 0;
  const byFive  = i % 5 === 0;

  if (byThree && byFive) {
    console.log('FizzBuzz'); // Outstanding. The whole squad showed up.
  } else if (byThree) {
    console.log('Fizz');
  } else if (byFive) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Mission complete. No casualties.
// I should go.
