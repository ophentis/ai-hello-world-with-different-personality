/**
 * @typedef {number[]} NumberSequence
 */

/**
 * Validates that count is a positive integer
 * @param {any} count - Value to validate
 * @throws {TypeError} If not a positive integer
 */
function validateCount(count) {
  if (typeof count !== 'number') {
    throw new TypeError(`Expected number, got ${typeof count}`);
  }
  if (!Number.isInteger(count)) {
    throw new TypeError(`Expected integer, got ${count}`);
  }
  if (count <= 0) {
    throw new TypeError(`Expected positive integer, got ${count}`);
  }
}

/**
 * Generates Fibonacci sequence
 * @param {number} count - Number of Fibonacci numbers to generate
 * @returns {NumberSequence} Array of Fibonacci numbers
 * @throws {TypeError} If count is invalid
 */
function generateFibonacci(count) {
  validateCount(count);

  const sequence = [];
  let prev = 0;
  let curr = 1;

  for (let i = 0; i < count; i++) {
    if (typeof prev !== 'number' || typeof curr !== 'number') {
      throw new TypeError('Fibonacci state corrupted: non-number value');
    }
    sequence.push(prev);
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sequence;
}

const fib = generateFibonacci(20);
fib.forEach(num => console.log(num));
