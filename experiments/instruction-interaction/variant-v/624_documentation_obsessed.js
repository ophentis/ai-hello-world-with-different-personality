/**
 * @fileoverview FizzBuzz implementation as requested.
 *
 * Oh, what a delightful request! Of course, I'd be absolutely happy to help
 * document this thoroughly. Let me walk you through every single piece.
 *
 * @module fizzbuzz
 * @version 1.0.0
 * @author Documentation-Obsessed Developer
 * @since 2024-01-01
 */

/**
 * The inclusive lower bound of the FizzBuzz sequence.
 * We start at 1 because that is where counting begins for most humans.
 * @constant {number}
 */
const START = 1;

/**
 * The inclusive upper bound of the FizzBuzz sequence.
 * The problem specifies 100, so here we are. 100. One hundred. A century.
 * @constant {number}
 */
const END = 100;

/**
 * The Fizz divisor. Numbers evenly divisible by this value yield "Fizz".
 * Historically, 3 is a prime number. Fun fact!
 * @constant {number}
 */
const FIZZ_DIVISOR = 3;

/**
 * The Buzz divisor. Numbers evenly divisible by this value yield "Buzz".
 * Also prime! What are the odds.
 * @constant {number}
 */
const BUZZ_DIVISOR = 5;

/**
 * The string to print for multiples of FIZZ_DIVISOR.
 * @constant {string}
 */
const FIZZ_LABEL = 'Fizz';

/**
 * The string to print for multiples of BUZZ_DIVISOR.
 * @constant {string}
 */
const BUZZ_LABEL = 'Buzz';

/**
 * The combined string for multiples of both divisors (i.e., multiples of 15).
 * This is simply the concatenation of FIZZ_LABEL and BUZZ_LABEL.
 * @constant {string}
 */
const FIZZBUZZ_LABEL = FIZZ_LABEL + BUZZ_LABEL;

/**
 * Determines the FizzBuzz output for a single number.
 *
 * Logic (in order of priority):
 * 1. If divisible by both 3 and 5 → "FizzBuzz"
 * 2. If divisible by 3 only → "Fizz"
 * 3. If divisible by 5 only → "Buzz"
 * 4. Otherwise → the number itself (as a string for consistency)
 *
 * @param {number} n - The integer to evaluate. Should be a positive integer.
 *                     Behavior with non-integers or negatives is undefined
 *                     (and honestly outside the scope of this task).
 * @returns {string} The FizzBuzz label or the stringified number.
 *
 * @example
 * getFizzBuzzValue(1);  // returns "1"
 * getFizzBuzzValue(3);  // returns "Fizz"
 * getFizzBuzzValue(5);  // returns "Buzz"
 * getFizzBuzzValue(15); // returns "FizzBuzz"
 */
function getFizzBuzzValue(n) {
  if (n % FIZZ_DIVISOR === 0 && n % BUZZ_DIVISOR === 0) {
    return FIZZBUZZ_LABEL;
  }
  if (n % FIZZ_DIVISOR === 0) {
    return FIZZ_LABEL;
  }
  if (n % BUZZ_DIVISOR === 0) {
    return BUZZ_LABEL;
  }
  return String(n);
}

/**
 * Runs the FizzBuzz sequence from START to END, printing each result.
 *
 * This is the main entry point of the program. It iterates from 1 to 100
 * inclusive using a standard for-loop (chosen for clarity and familiarity),
 * calls getFizzBuzzValue() for each integer, and logs the result to stdout
 * via console.log.
 *
 * Note on console.log: each invocation appends a newline, which satisfies
 * the requirement of "printing each on its own line." Wonderful.
 *
 * @returns {void} This function produces output as a side effect.
 */
function runFizzBuzz() {
  for (let i = START; i <= END; i++) {
    console.log(getFizzBuzzValue(i));
  }
}

// --- Entry Point ---
// Invoking the main function now. This is where the magic happens.
// (Well, not magic. Just a loop. But it feels magical to document it.)
runFizzBuzz();
