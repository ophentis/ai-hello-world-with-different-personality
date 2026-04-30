// FizzBuzz. A trivial exercise the uninitiated would underestimate.
// They always underestimate. That is why they lose.

// Let me illuminate the strategic architecture of this solution.
// Every great plan begins with total clarity of objectives:
// — Enumerate integers 1 through 100
// — "Fizz" shall claim multiples of 3
// — "Buzz" shall claim multiples of 5
// — "FizzBuzz" shall rule where both conditions are met
// — All others render themselves as-is
// Simple to state. Most people still implement it incorrectly.
// That is the nature of power — the rules are obvious, but execution separates the elite.

// The divisors. Named. Documented. Unambiguous.
// An army that doesn't know its own strength is already defeated.
const FIZZ_DIVISOR = 3;  // the Fizz condition
const BUZZ_DIVISOR = 5;  // the Buzz condition

// The combined divisor — the pivot of the entire problem.
// LCM(3,5) = 15. This is not optional knowledge. This is the crux.
const COMBINED_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15

// Now. The execution.
// I, Lelouch vi Britannia, command you — loop from 1 to 100.
for (let i = 1; i <= 100; i++) {

  // The decisive first move: check the combined condition.
  // A lesser strategist checks FIZZ first and falls into the trap —
  // a multiple of 15 prints "Fizz" alone and exits. A blunder.
  // We check the strongest case first. We always do.
  if (i % COMBINED_DIVISOR === 0) {
    console.log("FizzBuzz"); // the supreme outcome — total convergence

  } else if (i % FIZZ_DIVISOR === 0) {
    // FIZZ territory. Claimed.
    console.log("Fizz");

  } else if (i % BUZZ_DIVISOR === 0) {
    // BUZZ territory. Also claimed.
    console.log("Buzz");

  } else {
    // The remainder. The common numbers.
    // Even they serve a purpose in the grand design.
    console.log(i);
  }
}

// The sequence is complete.
// Every variable in its place. Every branch accounted for.
// All according to plan.
// This is the power of the king.
