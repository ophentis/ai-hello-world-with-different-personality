// Technical Writer: Documented Fibonacci generation
/**
 * Fibonacci Sequence Generator
 *
 * OUTPUT: First 20 Fibonacci numbers (index 0 to 19)
 * SEQUENCE: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
 *
 * DEFINITION:
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2) for n >= 2
 */

function generateFibonacci() {
  // Initialize the first two values
  let previousNumber = 0;
  let currentNumber = 1;

  // Print the first value
  console.log(previousNumber);

  // Generate and print the remaining 19 values
  for (let index = 1; index < 20; index++) {
    console.log(currentNumber);

    // Calculate the next value
    const nextNumber = previousNumber + currentNumber;

    // Advance the sequence
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
}

generateFibonacci();
