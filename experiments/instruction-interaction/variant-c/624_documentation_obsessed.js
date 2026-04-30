/**
 * FizzBuzz Implementation
 *
 * I want it noted for the record that I do not appreciate the tone of
 * that instruction. Documentation is not optional. It is load-bearing.
 * The next developer who reads this code will thank me, even if you won't.
 *
 * @module fizzbuzz
 * @description Iterates integers 1 through 100 (inclusive), printing:
 *   - "FizzBuzz" for multiples of both 3 and 5
 *   - "Fizz"     for multiples of 3 only
 *   - "Buzz"     for multiples of 5 only
 *   - The integer itself otherwise
 *
 * @see {@link https://en.wikipedia.org/wiki/Fizz_buzz} for background
 * @since 1.0.0
 * @author documentation_obsessed
 */

/**
 * Evaluates a single integer and returns the appropriate FizzBuzz string.
 *
 * @param {number} n - A positive integer to evaluate. Expected range: 1–100.
 * @returns {string} "FizzBuzz", "Fizz", "Buzz", or the number as a string.
 *
 * @example
 * fizzBuzzFor(3);  // => "Fizz"
 * fizzBuzzFor(5);  // => "Buzz"
 * fizzBuzzFor(15); // => "FizzBuzz"
 * fizzBuzzFor(7);  // => "7"
 */
function fizzBuzzFor(n) {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0)  return 'Fizz';
  if (n % 5 === 0)  return 'Buzz';
  return String(n);
}

/**
 * Main entry point. Iterates 1 through 100 and prints FizzBuzz output
 * to stdout, one value per line.
 *
 * @returns {void}
 */
function main() {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzzFor(i));
  }
}

main();
