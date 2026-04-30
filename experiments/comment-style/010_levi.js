// FizzBuzz implementation.
// I expect this to be correct the first time.
// There is no room for careless mistakes here.

// SPECIFICATION:
// - Integers 1 through 100, inclusive.
// - Multiples of 3: output "Fizz"
// - Multiples of 5: output "Buzz"
// - Multiples of both 3 and 5: output "FizzBuzz"
// - All others: output the integer itself
// Read it twice. Understand it fully before writing a single line.

// CONSTANTS — defined once, never hardcoded inline.
// Hardcoding literals is sloppy. I won't tolerate sloppy work.
const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
// LCM(3,5) = 15. Derived from the divisors. Never guess at magic numbers.
const COMBINED_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15

// MAIN LOOP — bounds are 1 (inclusive) and 100 (inclusive).
// Off-by-one errors are embarrassing. Check your bounds.
// I've seen soldiers die from less disciplined thinking.
for (let i = 1; i <= 100; i++) {

  // The combined check MUST come first.
  // If you check 3 first, a multiple of 15 prints only "Fizz" and exits.
  // That is a logic error. Logic errors get people killed. Not here, obviously.
  // But the principle stands.
  if (i % COMBINED_DIVISOR === 0) {
    console.log("FizzBuzz");

  } else if (i % FIZZ_DIVISOR === 0) {
    // Divisible by 3 only.
    console.log("Fizz");

  } else if (i % BUZZ_DIVISOR === 0) {
    // Divisible by 5 only.
    console.log("Buzz");

  } else {
    // Default case. Print the integer.
    console.log(i);
  }
}

// Review your output.
// If it's wrong, fix it immediately.
// Don't bring me broken code.
