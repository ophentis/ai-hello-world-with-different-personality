// SUBMARINE CAPTAIN'S CODING BRIEFING — OPERATION FIZZBUZZ
// Attention crew. Gather around. This is your first navigation exercise.
// You will learn to count, evaluate, and report. Correctly. Every time.
// A mistake in code, like a mistake in depth calculation, can be catastrophic.
// There are no second chances at crush depth. There are no second chances in production.

// ── MISSION BRIEFING ────────────────────────────────────────────────────────
// Objective: Count from 1 to 100 and report each number to the surface.
// Rules of engagement:
//   - If the number is divisible by 3: report "Fizz"
//   - If the number is divisible by 5: report "Buzz"
//   - If divisible by BOTH: report "FizzBuzz" — this takes priority. Always.
//   - Otherwise: report the number itself

// ── INSTRUMENT CALIBRATION ──────────────────────────────────────────────────
// Every instrument aboard this boat is labeled. No ambiguity. No guessing.
// "Aft torpedo tube" not "the thing in the back." Clear designations save lives.

const FIZZ_DIVISOR = 3;        // Fizz threshold — multiples of this trigger Fizz
const BUZZ_DIVISOR = 5;        // Buzz threshold — multiples of this trigger Buzz
const START_OF_COUNT = 1;      // We begin at 1. Not 0. Confirm.
const END_OF_COUNT = 100;      // We cease at 100. Not 99. Not 101. 100.

// ── OPERATIONAL CONCEPT: MODULO ──────────────────────────────────────────────
// The modulo operator (%) gives you the remainder after division.
// Think of it like checking if your crew divides evenly into watch rotations.
//   12 crew % 3 stations = 0 remainder → perfect assignment, no one left over
//   13 crew % 3 stations = 1 remainder → one crew member unassigned
// In code: if (number % 3 === 0) means the number divides into 3 with zero remainder.
// Zero remainder = perfectly divisible. That's your trigger.

// ── PRIORITY OF CHECKS ───────────────────────────────────────────────────────
// Protocol demands we check the highest-priority condition FIRST.
// FizzBuzz (divisible by both 3 and 5, i.e., by 15) takes precedence.
// If you check Fizz before FizzBuzz, number 15 gets mis-reported as "Fizz."
// A mis-reported bearing puts this boat on the rocks. Check order is NOT optional.

// ── EXECUTION ────────────────────────────────────────────────────────────────
// Commencing count. Steady as she goes.

for (let currentNumber = START_OF_COUNT; currentNumber <= END_OF_COUNT; currentNumber++) {

  // PRIORITY 1: FizzBuzz — divisible by both 3 and 5 (divisible by 15)
  if (currentNumber % (FIZZ_DIVISOR * BUZZ_DIVISOR) === 0) {
    console.log('FizzBuzz'); // Surface contact confirmed: FizzBuzz

  // PRIORITY 2: Fizz — divisible by 3 only
  } else if (currentNumber % FIZZ_DIVISOR === 0) {
    console.log('Fizz'); // Bearing confirmed: Fizz

  // PRIORITY 3: Buzz — divisible by 5 only
  } else if (currentNumber % BUZZ_DIVISOR === 0) {
    console.log('Buzz'); // Bearing confirmed: Buzz

  // PRIORITY 4: No special designation — report the number
  } else {
    console.log(currentNumber); // Number reported as-is
  }
}

// ── END OF COUNT ─────────────────────────────────────────────────────────────
// 100 numbers reported. Mission complete. Excellent work, crew.
// You've demonstrated the fundamentals: loops, conditionals, modulo arithmetic.
// Now you can navigate any FizzBuzz — in any sea.
// Dive stations. Dismissed.
