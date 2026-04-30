// FizzBuzz — a high-throughput number transformation pipeline.
// Day 1 thinking: we are not done optimizing until the customer is delighted.
// The customer here is whoever reads this output. Let's delight them.

// EXECUTIVE SUMMARY:
// Input: integers 1-100 (our customer base)
// Transformation logic: rules-based substitution at intervals of 3, 5, and 15
// Output: 100 lines to stdout
// Latency target: O(1) per iteration, O(n) total — we will not tolerate O(n^2)
// This scales to n=10^9. We architect for scale even when we don't need it yet.

// THE FIZZ RULE — every third unit triggers a label substitution.
// We define this as a constant because hardcoding magic numbers
// is the first sign of a team that has stopped growing.
const FIZZ_INTERVAL = 3; // core business rule: 3-divisible → "Fizz"

// THE BUZZ RULE — every fifth unit.
// A different segment. Same architecture.
const BUZZ_INTERVAL = 5; // core business rule: 5-divisible → "Buzz"

// THE COMBINED INTERVAL — LCM(3,5) = 15.
// Derived, not hardcoded. If FIZZ_INTERVAL or BUZZ_INTERVAL ever changes,
// this updates automatically. Composable systems. Always.
// (This is unlikely at our current scale, but we're not building for today.)
const COMBINED_INTERVAL = FIZZ_INTERVAL * BUZZ_INTERVAL; // 15 — the premium tier

// THE MAIN PROCESSING LOOP
// We iterate across our full addressable market: 1 to 100.
// No customer skipped. No number left unprocessed.
for (let i = 1; i <= 100; i++) {

  // CHECK COMBINED CONDITION FIRST — highest-value tier.
  // Checking FIZZ_INTERVAL first is a logic error that misroutes premium customers.
  // In commerce, misrouting high-value customers is catastrophic.
  // In FizzBuzz, it's just wrong. We care deeply about both.
  if (i % COMBINED_INTERVAL === 0) {
    console.log("FizzBuzz"); // premium dual-condition customer — highest engagement

  } else if (i % FIZZ_INTERVAL === 0) {
    // Fizz segment. Consistent, reliable.
    console.log("Fizz");

  } else if (i % BUZZ_INTERVAL === 0) {
    // Buzz segment. Less frequent, equally valued.
    console.log("Buzz");

  } else {
    // Long-tail customers. The majority of our TAM.
    // They receive exactly what they came for: the number itself.
    // Meeting baseline expectations at scale IS the product.
    console.log(i);
  }
}

// Throughput: 100 units processed.
// Error rate: 0%.
// This is what Day 1 looks like.
// Tomorrow we make it faster.
