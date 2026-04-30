// Count to one hundred.
// Some numbers speak for themselves.
// Others need a word.

// The words are Fizz and Buzz.
// Fizz belongs to three.
// Buzz belongs to five.
// When they meet, there is only FizzBuzz.
// This is the truth of the problem.

// A man counts. He does not flinch at fifteen.
// He knows what fifteen is before he reaches it.

for (let i = 1; i <= 100; i++) {
  // Divisible by both. The complete thing.
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // Three. Clean and simple.
    console.log("Fizz");
  } else if (i % 5 === 0) {
    // Five. Just as clean.
    console.log("Buzz");
  } else {
    // The number. Honest. Unchanged.
    console.log(i);
  }
}

// The loop ends at one hundred.
// It always ends.
// That is enough.
