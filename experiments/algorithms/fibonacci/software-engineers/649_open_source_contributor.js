/**
 * Fibonacci Sequence Generator
 *
 * Generates the first N Fibonacci numbers starting with 0 and 1.
 * Each number is the sum of the two preceding ones.
 *
 * @param {number} count - Number of Fibonacci numbers to generate
 * @returns {number[]} - Array of Fibonacci numbers
 *
 * @example
 * generateFibonacci(20)
 * // Returns: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
 */

'use strict';

function generateFibonacci(count) {
  const sequence = [];

  for (let i = 0; i < count; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Main execution
const fibSequence = generateFibonacci(20);
fibSequence.forEach(num => console.log(num));
