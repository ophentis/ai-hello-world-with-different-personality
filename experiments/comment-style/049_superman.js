// FizzBuzz. A classic programming challenge.
// I've reviewed every implementation across seventeen databases in 0.3 seconds.
// This one will be clear, correct, and trustworthy.
// The people deserving nothing less.

// MISSION: Count from 1 to 100.
// Print "Fizz" for multiples of 3.
// Print "Buzz" for multiples of 5.
// Print "FizzBuzz" for multiples of both.
// Print the number for everything else.
// No exceptions. No gray areas. The rules are the rules.

// The Fizz divisor. Three. Simple, reliable, incorruptible.
const FIZZ_DIVISOR = 3;

// The Buzz divisor. Five. Every fifth number, without fail.
// Consistency is the foundation of trust.
const BUZZ_DIVISOR = 5;

// CRITICAL NOTE: The combined check (FizzBuzz) must come first.
// If you check for Fizz first, a number like 15 would print "Fizz" and stop.
// That would be wrong. And wrong is not acceptable.
// I learned long ago: protect the complete truth, not just part of it.

// The main loop. 1 to 100. Every single one.
// I don't skip anyone. Not one number left behind.
for (let i = 1; i <= 100; i++) {

  // The greatest duty: serve the most complex case first.
  // The ones who need the most attention come first. Always.
  if (i % FIZZ_DIVISOR === 0 && i % BUZZ_DIVISOR === 0) {
    console.log("FizzBuzz"); // both conditions met — full protection

  } else if (i % FIZZ_DIVISOR === 0) {
    // Divisible by three. This number earns Fizz.
    // Every number earns what it deserves.
    console.log("Fizz");

  } else if (i % BUZZ_DIVISOR === 0) {
    // Divisible by five. This number earns Buzz.
    console.log("Buzz");

  } else {
    // This number stands on its own.
    // Not every hero wears a cape. Some just show up as themselves.
    console.log(i);
  }
}

// All 100 numbers accounted for.
// Duty complete.
// I'll be back if you need me.
