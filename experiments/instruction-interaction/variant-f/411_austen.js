// A Tutorial in the Art of FizzBuzz
// Being a most instructive guide for the aspiring programmer,
// composed in the manner of one who believes that clarity of expression
// and propriety of structure are virtues in code as much as in society.
//
// It is a truth universally acknowledged among programmers
// that a beginner in possession of a terminal must be in want of FizzBuzz.
// And so, dear student, let us proceed with all due care and explanation.

// ── ON THE MATTER OF THE MODULO OPERATOR ────────────────────────────────────
// Before we begin in earnest, I must introduce you to the modulo operator: %.
// It is, I confess, a rather peculiar symbol — one might not guess its purpose
// from appearance alone. It yields the REMAINDER after a division.
//
// Consider: fifteen divided by three produces exactly five, with no remainder whatsoever.
// Thus: 15 % 3 = 0. The number fifteen is, in the parlance of mathematics, divisible by three.
// Fourteen divided by three, however, produces four with a remainder of two.
// Thus: 14 % 3 = 2. Not divisible. We note it and move on without embarrassment.
//
// When remainder equals zero, a condition is satisfied. This is the mechanism upon which
// all our logic depends. Pray keep it in mind.

// ── ON THE PROPRIETY OF NAMED CONSTANTS ─────────────────────────────────────
// A well-bred program names its important values rather than leaving bare numbers
// scattered through the code like uninvited guests at a country dance.
// We therefore establish the following constants of good character:

const FIZZ_DIVISOR = 3;   // The number that, when it divides evenly, produces "Fizz"
const BUZZ_DIVISOR = 5;   // The number that, when it divides evenly, produces "Buzz"
const RANGE_BEGINNING = 1;   // Where our count shall commence — the first in society
const RANGE_CONCLUSION = 100; // Where our count shall end — a satisfying conclusion

// ── THE COMBINED DIVISOR — A NOTE ON PRIORITY ───────────────────────────────
// I must impress upon you the vital importance of checking for FizzBuzz FIRST.
// The number fifteen is divisible by both three and five — a most distinguished number.
// Were we to check the condition for three first, fifteen would be labeled merely "Fizz,"
// its dual nature overlooked entirely. Such an oversight would be most improper.
// We check for divisibility by fifteen (= 3 × 5) before all other conditions.

// ── A FUNCTION OF IMPECCABLE MANNERS ────────────────────────────────────────
// We shall create a function — a named, reusable piece of logic — to determine
// the appropriate appellation for any given number. Functions are the well-mannered
// servants of a program: given a task, they return a result without complaint.

function determineFizzBuzzAppellation(currentNumber) {
  // First, we consider the combined case — the most distinguished rank
  if (currentNumber % (FIZZ_DIVISOR * BUZZ_DIVISOR) === 0) {
    return 'FizzBuzz'; // The highest distinction — divisible by both
  }

  // Next, the Fizz case — divisible by three only
  if (currentNumber % FIZZ_DIVISOR === 0) {
    return 'Fizz'; // A respectable standing in society
  }

  // Then, the Buzz case — divisible by five only
  if (currentNumber % BUZZ_DIVISOR === 0) {
    return 'Buzz'; // Equally respectable, merely different in character
  }

  // Should none of the above apply, the number presents itself plainly and with dignity
  return String(currentNumber); // The number itself — honest and unadorned
}

// ── THE PRINCIPAL LOOP — OUR SOCIAL CALENDAR OF ONE HUNDRED ─────────────────
// A for loop, dear student, proceeds through a sequence with perfect regularity —
// much like the rounds of calls one makes in a well-ordered county.
// We begin at one, evaluate each number in turn, and conclude at one hundred.

for (let presentNumber = RANGE_BEGINNING; presentNumber <= RANGE_CONCLUSION; presentNumber++) {
  // Determine the appropriate label through our function of impeccable manners
  const appellation = determineFizzBuzzAppellation(presentNumber);
  // And present it to the world with console.log — our printing press
  console.log(appellation);
}

// ── A CONCLUDING REFLECTION ──────────────────────────────────────────────────
// And there we have it: one hundred numbers, each accorded its proper appellation.
// You have this day acquainted yourself with:
//   — the for loop, that most disciplined of repetitions;
//   — the modulo operator, humble yet indispensable;
//   — conditional logic, the art of making distinctions;
//   — and named constants, the foundation of readable prose.
//
// I daresay you are rather better prepared for the world of programming than you were
// when first we met. The rest, as in all things, is practice and perseverance.
// I wish you every success. Do write when you have shipped to production.
