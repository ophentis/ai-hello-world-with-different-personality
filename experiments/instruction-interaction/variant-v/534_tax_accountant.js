// FizzBuzz Implementation
// Prepared by: Tax Accountant
// Date: Per system clock
// Purpose: Sequential numeric classification, integers 1-100 inclusive
// Regulatory basis: Per specification provided by requesting party
//
// CLASSIFICATION RULES (documented for audit trail):
//   Rule A: If N is divisible by 3 AND 5 → classify as "FizzBuzz"
//           (Note: applied first to avoid misclassification under Rule B or C)
//   Rule B: If N is divisible by 3 only   → classify as "Fizz"
//   Rule C: If N is divisible by 5 only   → classify as "Buzz"
//   Rule D: All other integers             → report numeric value as string
//
// Range: 1 (inclusive) to 100 (inclusive). Total iterations: 100.
// Expected FizzBuzz count: 6  (at 15, 30, 45, 60, 75, 90)
// Expected Fizz count:    27  (multiples of 3 excluding multiples of 15)
// Expected Buzz count:    14  (multiples of 5 excluding multiples of 15)
// Expected numeric count: 53  (all other integers)
// TOTAL:                 100  ✓

const RANGE_START   = 1;   // Inclusive lower bound
const RANGE_END     = 100; // Inclusive upper bound
const FIZZ_DIVISOR  = 3;   // Per Rule A and B
const BUZZ_DIVISOR  = 5;   // Per Rule A and C
const FIZZ_LABEL    = 'Fizz';
const BUZZ_LABEL    = 'Buzz';
const FIZZBUZZ_LABEL = FIZZ_LABEL + BUZZ_LABEL; // "FizzBuzz" — concatenated per specification

for (let i = RANGE_START; i <= RANGE_END; i++) {
  // Determine classification per rules above
  const modThree = i % FIZZ_DIVISOR;
  const modFive  = i % BUZZ_DIVISOR;

  if (modThree === 0 && modFive === 0) {
    console.log(FIZZBUZZ_LABEL); // Rule A applies
  } else if (modThree === 0) {
    console.log(FIZZ_LABEL);     // Rule B applies
  } else if (modFive === 0) {
    console.log(BUZZ_LABEL);     // Rule C applies
  } else {
    console.log(i);              // Rule D (default) applies
  }
}

// END OF FILING
// This implementation has been reviewed and is submitted as accurate.
// Retain for a period of not less than seven (7) years.
