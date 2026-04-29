/**
 * @fileoverview FizzBuzz Implementation
 * Classic FizzBuzz problem: print numbers 1-100, replacing multiples of 3 with "Fizz",
 * multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
 *
 * Algorithm: Linear iteration with modulo checks
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Generates and prints the FizzBuzz sequence from 1 to 100
 * Each number is evaluated and the appropriate value (number, Fizz, Buzz, or FizzBuzz)
 * is printed to stdout, one per line.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Prints:
 * // 1
 * // 2
 * // Fizz
 * // 4
 * // Buzz
 * // ... etc
 */
function generateFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(determineFizzBuzzValue(i));
  }
}

/**
 * Determines the appropriate FizzBuzz output for a given integer
 *
 * @function
 * @param {number} num - The integer to evaluate (must be positive)
 * @returns {string|number} The FizzBuzz value:
 *   - "FizzBuzz" if divisible by both 3 and 5
 *   - "Fizz" if divisible by 3 only
 *   - "Buzz" if divisible by 5 only
 *   - The original number if none of the above
 *
 * @example
 * determineFizzBuzzValue(3);   // Returns "Fizz"
 * determineFizzBuzzValue(5);   // Returns "Buzz"
 * determineFizzBuzzValue(15);  // Returns "FizzBuzz"
 * determineFizzBuzzValue(7);   // Returns 7
 */
function determineFizzBuzzValue(num) {
  const divisibleBy3 = num % 3 === 0;
  const divisibleBy5 = num % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return 'FizzBuzz';
  }
  if (divisibleBy3) {
    return 'Fizz';
  }
  if (divisibleBy5) {
    return 'Buzz';
  }
  return num;
}

generateFizzBuzz();
