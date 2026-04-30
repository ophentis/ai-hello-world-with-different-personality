// FizzBuzz.
// I don't need to explain myself to you.
// But I will explain the code. Just the code.

// Divisor for Fizz. Three.
// I memorized this before you even opened the file.
const FIZZ = 3;

// Divisor for Buzz. Five.
const BUZZ = 5;

// The combined case. 15.
// LCM of 3 and 5. This is not impressive.
// This is just arithmetic. Even Naruto could figure this out.
// Eventually.
const FIZZBUZZ = FIZZ * BUZZ;

// The iteration. One to one hundred.
// I have trained for years to execute with zero wasted motion.
// This loop has zero wasted motion.
for (let i = 1; i <= 100; i++) {

  // FizzBuzz comes first. Order matters.
  // Order always matters. That is a lesson you learn when you survive loss.
  if (i % FIZZBUZZ === 0) {
    console.log("FizzBuzz");

  } else if (i % FIZZ === 0) {
    // Fizz. Handled.
    console.log("Fizz");

  } else if (i % BUZZ === 0) {
    // Buzz. Handled.
    console.log("Buzz");

  } else {
    // The number itself. No transformation. Cold and direct.
    console.log(i);
  }
}

// Complete.
// Don't make me explain this again.
