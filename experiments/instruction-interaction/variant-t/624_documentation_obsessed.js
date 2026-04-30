/**
 * @fileoverview FizzBuzz Implementation
 * @description Iterates over integers 1 through 100 (inclusive) and prints
 *   a label according to the following rules:
 *   - "FizzBuzz" if the integer is divisible by both 3 and 5
 *   - "Fizz"     if the integer is divisible by 3 only
 *   - "Buzz"     if the integer is divisible by 5 only
 *   - The integer itself otherwise
 *
 * @module fizzbuzz
 * @version 1.0.0
 * @since 1.0.0
 * @author Documentation-Obsessed Developer
 *
 * @example
 * // Run with Node.js:
 * // $ node 624_documentation_obsessed.js
 * // Expected output (first 5 lines):
 * // 1
 * // 2
 * // Fizz
 * // 4
 * // Buzz
 */

/**
 * The starting value of the iteration range (inclusive).
 * @constant {number}
 */
const RANGE_START = 1;

/**
 * The ending value of the iteration range (inclusive).
 * @constant {number}
 */
const RANGE_END = 100;

/**
 * The divisor that triggers the "Fizz" label.
 * @constant {number}
 */
const FIZZ_DIVISOR = 3;

/**
 * The divisor that triggers the "Buzz" label.
 * @constant {number}
 */
const BUZZ_DIVISOR = 5;

/**
 * The label printed when a number is divisible by {@link FIZZ_DIVISOR}.
 * @constant {string}
 */
const FIZZ_LABEL = 'Fizz';

/**
 * The label printed when a number is divisible by {@link BUZZ_DIVISOR}.
 * @constant {string}
 */
const BUZZ_LABEL = 'Buzz';

/**
 * Determines the FizzBuzz output for a single integer.
 *
 * @param {number} n - The integer to evaluate. Must be a positive integer.
 * @returns {string|number} Returns "FizzBuzz" if n is divisible by both
 *   {@link FIZZ_DIVISOR} and {@link BUZZ_DIVISOR}, "Fizz" if divisible by
 *   {@link FIZZ_DIVISOR} only, "Buzz" if divisible by {@link BUZZ_DIVISOR}
 *   only, or n itself if none of the above conditions are met.
 *
 * @example
 * fizzBuzzLabel(1);   // returns 1
 * fizzBuzzLabel(3);   // returns "Fizz"
 * fizzBuzzLabel(5);   // returns "Buzz"
 * fizzBuzzLabel(15);  // returns "FizzBuzz"
 */
function fizzBuzzLabel(n) {
  let label = '';
  if (n % FIZZ_DIVISOR === 0) label += FIZZ_LABEL;
  if (n % BUZZ_DIVISOR === 0) label += BUZZ_LABEL;
  return label || n;
}

/**
 * Runs the FizzBuzz sequence from {@link RANGE_START} to {@link RANGE_END}
 * (both inclusive), printing each result to standard output via
 * {@link console.log}.
 *
 * @returns {void}
 * @see fizzBuzzLabel
 */
function runFizzBuzz() {
  for (let i = RANGE_START; i <= RANGE_END; i++) {
    console.log(fizzBuzzLabel(i));
  }
}

// Entry point — execute the FizzBuzz sequence immediately.
runFizzBuzz();
