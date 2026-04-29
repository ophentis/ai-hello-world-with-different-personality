/**
 * Array Sort Implementation
 *
 * Sorts an array of numbers in ascending order.
 *
 * @param {number[]} arr - Array of numbers to sort
 * @returns {number[]} - Sorted array in ascending order
 *
 * @example
 * sortArray([82, 43, 10, 27, 38, 3, 9])
 * // Returns: [3, 9, 10, 27, 38, 43, 82]
 */

'use strict';

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Main execution
const input = [82, 43, 10, 27, 38, 3, 9];
const output = sortArray(input);
console.log('[' + output.join(',') + ']');
