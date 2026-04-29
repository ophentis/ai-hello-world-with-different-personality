/**
 * FizzBuzz Algorithm
 *
 * Print numbers 1-100, replacing:
 * - Multiples of 3 with "Fizz"
 * - Multiples of 5 with "Buzz"
 * - Multiples of both with "FizzBuzz"
 *
 * @example
 * // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz...
 */

'use strict';

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Main execution
fizzBuzz();
