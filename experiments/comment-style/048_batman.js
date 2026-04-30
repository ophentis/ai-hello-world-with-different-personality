// FizzBuzz.
// I've run this problem through 47 simulations already.
// Every version reaches the same conclusion.
// Here is the optimal implementation.

// THREAT ASSESSMENT: Low. This is not a trap. Probably.
// I'm watching it anyway.

// OBJECTIVE: Output integers 1-100 with the following substitutions:
//   — multiples of 3: "Fizz"
//   — multiples of 5: "Buzz"
//   — multiples of 15: "FizzBuzz"
//   — all others: the integer itself
// Simple on the surface. The simplest problems are often the most dangerous.

// Alfred once said: "Why do we fall? So we can learn to get back up."
// The equivalent here: why do we check conditions in order?
// Because order IS correctness. Check FizzBuzz first, or the logic collapses.

// CONSTANTS — I never hardcode. Ever.
// The day you hardcode a literal is the day someone swaps it on you mid-mission.
const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
const COMBINED_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15 — the critical threshold

// THE LOOP. Scoped. Controlled. No side effects outside this function.
// I've seen what uncontrolled iteration does to a city.
// I won't let it happen here.
for (let i = 1; i <= 100; i++) {

  // PRIORITY ONE: catch the combined case first.
  // If you check FIZZ_DIVISOR first, multiples of 15 get mislabeled as "Fizz" and escape.
  // Nothing escapes in my city.
  if (i % COMBINED_DIVISOR === 0) {
    console.log("FizzBuzz"); // neutralized — both conditions contained

  } else if (i % FIZZ_DIVISOR === 0) {
    // FIZZ confirmed. Clean apprehension.
    console.log("Fizz");

  } else if (i % BUZZ_DIVISOR === 0) {
    // BUZZ confirmed. Also clean.
    console.log("Buzz");

  } else {
    // Default: just the number.
    // Most of them are just numbers. They still get logged.
    // No one is invisible in this city.
    console.log(i);
  }
}

// Loop complete. 100 values processed. Zero errors.
// I'm prepared for follow-up questions.
// I'm always prepared.
