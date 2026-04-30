// FizzBuzz Computation — Prepared by: Tax Accountant
// Date: See system clock
// Purpose: Enumerate integers 1 through 100, applying classification rules per specification.
// Retention: Keep indefinitely (source code is an asset, per internal policy).
//
// CLASSIFICATION RULES (verbatim from specification):
//   Rule 3.A — If n is divisible by 3 AND 5: classify as "FizzBuzz"
//   Rule 3.B — If n is divisible by 3 only:  classify as "Fizz"
//   Rule 5.A — If n is divisible by 5 only:  classify as "Buzz"
//   Rule D.1 — Otherwise: report n as-is (no reclassification)
//
// NOTE: Rules 3.A/3.B/5.A/D.1 are mutually exclusive by construction.
//       The concatenation method (below) yields correct results for all cases
//       and has been verified against spot-checks at n=3, 5, 15, 30, 1, 97, 100.
//       Supporting calculations available upon request.

// --- COMPUTATION BEGIN ---

const RANGE_START = 1;    // per spec: inclusive lower bound
const RANGE_END   = 100;  // per spec: inclusive upper bound
const DIVISOR_A   = 3;    // per Rule 3.A / 3.B
const DIVISOR_B   = 5;    // per Rule 3.A / 5.A

for (let i = RANGE_START; i <= RANGE_END; i++) {
  let classification = '';

  // Apply Rule 3.B (partial — combined result handles 3.A automatically)
  if (i % DIVISOR_A === 0) classification += 'Fizz';

  // Apply Rule 5.A (partial — combined result handles 3.A automatically)
  if (i % DIVISOR_B === 0) classification += 'Buzz';

  // Apply Rule D.1 fallback: if no classification assigned, report i
  const output = classification || i;

  console.log(output); // Line item recorded to stdout. Audit trail preserved.
}

// --- COMPUTATION END ---
// Total line items processed: 100
// Expected output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, ...
// Verified: spot-check complete. No discrepancies noted.
