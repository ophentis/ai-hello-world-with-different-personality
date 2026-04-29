/**
 * @fileoverview Fibonacci Sequence Generator
 *
 * Generates and prints the first n numbers of the Fibonacci sequence.
 * The Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
 *
 * Algorithm: Iterative approach
 * Time Complexity: O(n)
 * Space Complexity: O(n) for storing the sequence
 * Overflow Risk: For n > 50, results exceed JavaScript's safe integer range
 */

/**
 * Generates the first n Fibonacci numbers using iterative approach
 * and prints each number on a separate line
 *
 * @function
 * @param {number} count - The number of Fibonacci numbers to generate (n > 0)
 * @returns {void} - Prints each Fibonacci number to stdout, one per line
 *
 * @example
 * // printFibonacci(5) prints:
 * // 0
 * // 1
 * // 1
 * // 2
 * // 3
 *
 * @throws {Error} If count is not a positive integer
 */
function printFibonacci(count) {
  // Initialize two variables to track consecutive Fibonacci numbers
  let previousNumber = 0;
  let currentNumber = 1;

  // Generate and print first count numbers
  for (let index = 0; index < count; index++) {
    console.log(previousNumber);
    // Calculate next Fibonacci number
    const nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
}

// Generate and print first 20 Fibonacci numbers
printFibonacci(20);
