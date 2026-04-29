/**
 * @typedef {string | number} FizzBuzzValue
 */

/**
 * Evaluates FizzBuzz rule for a number
 * @param {number} n - Number to check (must be positive integer)
 * @returns {FizzBuzzValue} The FizzBuzz result
 * @throws {TypeError} If n is not a number or not an integer
 */
function evaluateFizzBuzz(n) {
  if (typeof n !== 'number') {
    throw new TypeError(`Expected number, got ${typeof n}`);
  }
  if (!Number.isInteger(n)) {
    throw new TypeError(`Expected integer, got ${n}`);
  }
  if (n <= 0) {
    throw new TypeError(`Expected positive integer, got ${n}`);
  }

  const fizzResult = n % 3 === 0;
  const buzzResult = n % 5 === 0;

  if (fizzResult && buzzResult) {
    return 'FizzBuzz';
  }
  if (fizzResult) {
    return 'Fizz';
  }
  if (buzzResult) {
    return 'Buzz';
  }
  return n;
}

/**
 * Runs FizzBuzz sequence
 * @param {number} start - Start value (inclusive, must be positive integer)
 * @param {number} end - End value (inclusive, must be positive integer)
 * @returns {void}
 */
function runFizzBuzz(start, end) {
  if (!Number.isInteger(start) || start <= 0) {
    throw new TypeError('start must be positive integer');
  }
  if (!Number.isInteger(end) || end <= 0) {
    throw new TypeError('end must be positive integer');
  }
  if (start > end) {
    throw new TypeError('start must be less than or equal to end');
  }

  for (let i = start; i <= end; i++) {
    console.log(evaluateFizzBuzz(i));
  }
}

runFizzBuzz(1, 100);
