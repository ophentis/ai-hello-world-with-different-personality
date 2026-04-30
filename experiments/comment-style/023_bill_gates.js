// FizzBuzz Implementation
// Author context: classic technical interview benchmark
// Purpose: enumerate 1-100, applying transformation rules to divisibles
//
// Analysis notes:
// This problem is deceptively simple but reveals a lot about how someone thinks.
// The naive approach works at this scale. Let's walk through it methodically.

// CONSTANTS — always define your magic numbers.
// This makes the code auditable and easy to modify if requirements change.
// (Imagine if a future spec says "Fizz at 4" — named constants make that a one-line change.)
const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;

// Derived constant: the LCM of FIZZ and BUZZ.
// For coprime integers p and q, LCM(p,q) = p*q.
// 3 and 5 are coprime (GCD=1), so LCM = 15.
// This matters because we must catch the FizzBuzz case before the individual cases.
const FIZZBUZZ_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // = 15

// LOOP — iterate 1 through 100 inclusive.
// Time complexity: O(n) where n=100. Constant time per iteration.
// Space complexity: O(1) — we hold a single integer at a time.
// At this scale, optimization is irrelevant. At n=10^9, we'd rethink.
for (let i = 1; i <= 100; i++) {

  // CASE 1: divisible by both — check this before the individual cases.
  // Ordering matters here. A combined check is more specific than a single check.
  // More specific conditions should always precede more general ones.
  if (i % FIZZBUZZ_DIVISOR === 0) {
    console.log("FizzBuzz");

  // CASE 2: divisible by 3 only (we've already excluded multiples of 15)
  } else if (i % FIZZ_DIVISOR === 0) {
    console.log("Fizz");

  // CASE 3: divisible by 5 only
  } else if (i % BUZZ_DIVISOR === 0) {
    console.log("Buzz");

  // CASE 4: default — not divisible by either
  } else {
    console.log(i);
  }
}

// RESULTS: 100 lines of output.
// Verification approach: spot-check 15 → "FizzBuzz", 3 → "Fizz", 5 → "Buzz", 7 → "7".
// Edge cases: 1 (no divisibility), 100 (Buzz only, not FizzBuzz), 99 (Fizz only).
// This implementation handles all of them correctly.
