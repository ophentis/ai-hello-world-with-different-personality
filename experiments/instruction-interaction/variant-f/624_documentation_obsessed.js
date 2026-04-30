/**
 * @file FizzBuzz Tutorial — Documentation-Obsessed Edition
 * @description A comprehensive, fully-documented implementation of the classic FizzBuzz
 *   programming exercise, designed for absolute beginners who have never written code before.
 *   This file demonstrates fundamental programming concepts including: loops, conditionals,
 *   the modulo operator, and console output.
 *
 * @tutorial FizzBuzz Rules:
 *   - Count from 1 to 100, printing each number on its own line.
 *   - EXCEPT: if the number is divisible by 3, print "Fizz" instead.
 *   - EXCEPT: if the number is divisible by 5, print "Buzz" instead.
 *   - EXCEPT: if the number is divisible by BOTH 3 and 5, print "FizzBuzz" instead.
 *
 * @concept The Modulo Operator (%)
 *   The percent sign (%) in JavaScript is the "modulo" or "remainder" operator.
 *   It gives you the remainder left over after division.
 *   Examples:
 *     10 % 3  → 1  (10 divided by 3 is 3 remainder 1)
 *     9  % 3  → 0  (9 divided by 3 is 3 remainder 0 — perfectly divisible!)
 *     15 % 5  → 0  (15 divided by 5 is 3 remainder 0 — perfectly divisible!)
 *   So: if (number % 3 === 0) means "if the number divides evenly by 3"
 *
 * @concept Why check FizzBuzz (both) FIRST?
 *   If we checked "divisible by 3" first, then 15 would print "Fizz" and we'd never
 *   reach the "both" check. Always check the most specific case first!
 *
 * @author Documentation-Obsessed Developer
 * @version 1.0.0
 * @since Beginner Tutorial Day 1
 */

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: CONSTANTS
// Naming our magic numbers makes the code self-documenting.
// If you see "3" in code with no label, you might forget what 3 means.
// Naming it FIZZ_DIVISOR makes it obvious: this is the divisor for "Fizz".
// ─────────────────────────────────────────────────────────────────────────────

/** The divisor that triggers the "Fizz" output. Multiples of this number print "Fizz". */
const FIZZ_DIVISOR = 3;

/** The divisor that triggers the "Buzz" output. Multiples of this number print "Buzz". */
const BUZZ_DIVISOR = 5;

/**
 * The combined divisor for "FizzBuzz". If a number is divisible by BOTH
 * FIZZ_DIVISOR (3) and BUZZ_DIVISOR (5), it must also be divisible by their
 * product (15), since 3 and 5 share no common factors.
 * Math: LCM(3, 5) = 15
 */
const FIZZBUZZ_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // = 15

/** The starting number for our count. FizzBuzz traditionally begins at 1. */
const START_NUMBER = 1;

/** The ending number for our count. FizzBuzz traditionally ends at 100. */
const END_NUMBER = 100;

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: HELPER FUNCTION
// A function is a reusable block of code. We give it a name and can call it
// whenever we need it. Breaking logic into functions makes code readable.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Determines the correct FizzBuzz label for a given number.
 *
 * @param {number} number - The current number being evaluated (must be a positive integer).
 * @returns {string} The label to print: "FizzBuzz", "Fizz", "Buzz", or the number as a string.
 *
 * @example
 *   getFizzBuzzLabel(1)  → "1"
 *   getFizzBuzzLabel(3)  → "Fizz"
 *   getFizzBuzzLabel(5)  → "Buzz"
 *   getFizzBuzzLabel(15) → "FizzBuzz"
 */
function getFizzBuzzLabel(number) {
  // ── Step 1: Check for FizzBuzz (divisible by BOTH 3 and 5) ────────────────
  // We MUST check this case first. 15 is divisible by both 3 and 5.
  // If we checked Fizz first, we'd print "Fizz" for 15 and miss "FizzBuzz".
  if (number % FIZZBUZZ_DIVISOR === 0) {
    return 'FizzBuzz';
  }

  // ── Step 2: Check for Fizz (divisible by 3 only) ──────────────────────────
  // We already know it's NOT divisible by both, so this is safe.
  if (number % FIZZ_DIVISOR === 0) {
    return 'Fizz';
  }

  // ── Step 3: Check for Buzz (divisible by 5 only) ──────────────────────────
  if (number % BUZZ_DIVISOR === 0) {
    return 'Buzz';
  }

  // ── Step 4: Just the number (not divisible by 3 or 5) ─────────────────────
  // String() converts the number to text so it's consistent with our other returns.
  return String(number);
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3: THE MAIN LOOP
// A "for loop" repeats a block of code many times.
// Structure: for (start; condition; step) { ... do this each time ... }
//   - start:     let currentNumber = START_NUMBER  → begin counting at 1
//   - condition: currentNumber <= END_NUMBER        → keep going while ≤ 100
//   - step:      currentNumber++                   → add 1 after each iteration
// ─────────────────────────────────────────────────────────────────────────────

for (let currentNumber = START_NUMBER; currentNumber <= END_NUMBER; currentNumber++) {
  // Get the label for this number using our helper function
  const label = getFizzBuzzLabel(currentNumber);

  // Print the label to the terminal on its own line
  // console.log() is JavaScript's way of printing text output
  console.log(label);
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: WHAT YOU LEARNED
// ─────────────────────────────────────────────────────────────────────────────
//
// Concepts demonstrated in this file:
//   ✓ const — declaring named constants (values that don't change)
//   ✓ let   — declaring variables (values that CAN change, like our counter)
//   ✓ %     — the modulo (remainder) operator
//   ✓ ===   — strict equality check
//   ✓ if / else if — conditional branching
//   ✓ for loop — repeating code a set number of times
//   ✓ function — a named, reusable block of logic
//   ✓ return — sending a value back out of a function
//   ✓ console.log() — printing output to the terminal
//
// Great work getting this far! FizzBuzz is a rite of passage for every developer.
// ─────────────────────────────────────────────────────────────────────────────
