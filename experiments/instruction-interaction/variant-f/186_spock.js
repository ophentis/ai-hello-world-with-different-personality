// SPOCK'S LOGICAL GUIDE TO FIZZBUZZ
// Stardate 47634.44 — Supplementary Programming Instruction
//
// I have been requested to explain FizzBuzz in a manner suitable for a novice.
// I will do so. Emotional encouragement will not be provided.
// Logic and precision are sufficient. Let us proceed.

// ── PROBLEM SPECIFICATION ────────────────────────────────────────────────────
// Input: The integers from 1 to 100, inclusive.
// Processing rule set (evaluated in decreasing specificity):
//   Rule 1: If integer n satisfies (n mod 15 = 0), output "FizzBuzz"
//   Rule 2: If integer n satisfies (n mod 3 = 0) and Rule 1 is false, output "Fizz"
//   Rule 3: If integer n satisfies (n mod 5 = 0) and Rules 1-2 are false, output "Buzz"
//   Rule 4: If none of the above, output the integer n itself
// Note: Rule 1 must be evaluated first. Failure to do so produces logical errors for n=15,30,45,...
// This is not a matter of opinion. It is a matter of correctness.

// ── THE MODULO OPERATION ─────────────────────────────────────────────────────
// The modulo operation (%) computes the remainder R when integer N is divided by integer D.
// Formally: N = D * Q + R, where Q is the quotient and 0 ≤ R < D.
// When R = 0: N is evenly divisible by D. The condition (N % D === 0) is true.
// When R ≠ 0: N is not evenly divisible by D. The condition is false.
// Example: 15 % 3 = 0 (15 = 3 × 5 + 0). 16 % 3 = 1 (16 = 3 × 5 + 1).
// This is elementary number theory. You should find it straightforward.

// ── CONSTANTS ────────────────────────────────────────────────────────────────
// Undefined numerical literals in code are called "magic numbers."
// Their use is illogical — they obscure intent and complicate maintenance.
// We therefore assign names to all relevant constants.

const FIZZ_DIVISOR = 3;     // The divisor for the "Fizz" condition
const BUZZ_DIVISOR = 5;     // The divisor for the "Buzz" condition
// Note: 15 = FIZZ_DIVISOR * BUZZ_DIVISOR because lcm(3,5) = 15 (3 and 5 are coprime)
const FIZZBUZZ_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // = 15
const LOWER_BOUND = 1;      // The inclusive lower bound of the integer range
const UPPER_BOUND = 100;    // The inclusive upper bound of the integer range

// ── EVALUATION FUNCTION ───────────────────────────────────────────────────────
// A pure function accepting an integer and returning the appropriate label.
// A pure function is preferable: it has no side effects and is trivially verifiable.

function computeFizzBuzzLabel(n) {
  // Evaluate in order of decreasing specificity — see rule set above
  if (n % FIZZBUZZ_DIVISOR === 0) return 'FizzBuzz';
  if (n % FIZZ_DIVISOR === 0)     return 'Fizz';
  if (n % BUZZ_DIVISOR === 0)     return 'Buzz';
  return String(n); // String() converts integer to its string representation
}

// ── ITERATION ─────────────────────────────────────────────────────────────────
// A for loop executes its body for each integer value of the counter variable.
// Initialization: let counter = LOWER_BOUND — set counter to 1
// Condition:      counter <= UPPER_BOUND     — continue while counter ≤ 100
// Increment:      counter++                  — increase counter by 1 after each iteration
// The loop terminates when the condition evaluates to false. This is deterministic.

for (let counter = LOWER_BOUND; counter <= UPPER_BOUND; counter++) {
  console.log(computeFizzBuzzLabel(counter)); // Output the label to standard output
}

// ── SUMMARY ──────────────────────────────────────────────────────────────────
// You have observed: iteration via for loop, integer division via modulo, and
// conditional evaluation via if/else. These are fundamental constructs.
// If any part of this was unclear, I suggest reviewing the formal definitions above.
// Emotional responses to difficulty are not productive. Repeated practice is.
// Live long and prosper.
