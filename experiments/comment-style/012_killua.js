// FizzBuzz. I figured out the pattern in about half a second.
// Three years of assassination training makes everything else look slow.

// The key insight: 15 is the LCM of 3 and 5.
// That's the only number you actually need to check first.
// Check 15 before 3 or 5, otherwise you get partial matches.
// Most people miss that. It's an easy trap.

// Constants. Named clearly so nobody wastes time guessing.
const FIZZ_THRESHOLD = 3;  // every third number
const BUZZ_THRESHOLD = 5;  // every fifth number
const BOTH_THRESHOLD = 15; // LCM(3,5) — the critical check

// One loop. No helper functions needed.
// Keeping it lean means fewer places for bugs to hide.
// That's something Gon would never think about, but I do.
for (let i = 1; i <= 100; i++) {

  // Hit the combined case first — non-negotiable.
  // Getting this wrong would be embarrassing.
  if (i % BOTH_THRESHOLD === 0) {
    console.log("FizzBuzz");

  } else if (i % FIZZ_THRESHOLD === 0) {
    // Pure Fizz. Clean.
    console.log("Fizz");

  } else if (i % BUZZ_THRESHOLD === 0) {
    // Pure Buzz. Also clean.
    console.log("Buzz");

  } else {
    // Default: the raw number.
    // Simple. No decoration needed.
    console.log(i);
  }
}

// Done. Took longer to write the comments than to solve it.
// Way longer than it would have taken to assassinate someone.
// Not that I do that anymore.
