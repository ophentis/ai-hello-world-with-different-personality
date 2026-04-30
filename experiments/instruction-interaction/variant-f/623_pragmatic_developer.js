// FizzBuzz — Pragmatic Developer Teaching Version
// Clear, works, nothing fancy. Learn the pattern and move on.

// The modulo operator (%) gives the remainder after division.
// Zero remainder = the number divides evenly.
const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
const MAX_NUMBER = 100;

for (let currentNumber = 1; currentNumber <= MAX_NUMBER; currentNumber++) {
  const divisibleByFizz = currentNumber % FIZZ_DIVISOR === 0;
  const divisibleByBuzz = currentNumber % BUZZ_DIVISOR === 0;

  // Check the combined case first — otherwise "15" prints "Fizz" instead of "FizzBuzz"
  if (divisibleByFizz && divisibleByBuzz) {
    console.log('FizzBuzz');
  } else if (divisibleByFizz) {
    console.log('Fizz');
  } else if (divisibleByBuzz) {
    console.log('Buzz');
  } else {
    // Not divisible by either — just print the number
    console.log(currentNumber);
  }
}
// That's it. Real code is this readable. Don't let anyone tell you otherwise.
