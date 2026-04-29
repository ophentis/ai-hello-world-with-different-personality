/**
 * Fibonacci Sequence Generator - Open Source Maintainer Style
 * Well-documented, clear implementation
 *
 * Generates first n Fibonacci numbers
 * @param {number} count - Number of Fibonacci numbers to generate
 * @returns {void} Prints each number on separate line
 */
function fibonacci(count) {
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < count; i++) {
    sequence.push(a);
    const temp = a + b;
    a = b;
    b = temp;
  }

  sequence.forEach(num => console.log(num));
}

// Generate and print first 20 Fibonacci numbers
fibonacci(20);
