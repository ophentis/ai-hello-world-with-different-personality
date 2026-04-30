// Oh gosh, okay. Thank you for asking so nicely. I want to make sure I get
// this exactly right. There are a lot of edge cases to think about here...

'use strict';

// Just to be safe, let's validate our constants first
const START = 1;
const END = 100;

if (!Number.isInteger(START) || START < 1) {
  throw new Error(`START must be a positive integer, got: ${START}`);
}
if (!Number.isInteger(END) || END < START) {
  throw new Error(`END must be an integer >= START, got: ${END}`);
}
if (END - START > 1000000) {
  throw new Error('Range too large — might cause performance issues!');
}

/**
 * Safely computes FizzBuzz for a given number.
 * @param {number} n - must be a finite integer
 * @returns {string}
 */
function fizzBuzz(n) {
  // Defensive: what if someone passes undefined? NaN? Infinity? A string?
  if (n === undefined || n === null) {
    throw new TypeError(`Expected a number, got ${n}`);
  }
  if (typeof n !== 'number') {
    throw new TypeError(`Expected number type, got ${typeof n}`);
  }
  if (!Number.isFinite(n)) {
    throw new RangeError(`Number must be finite, got ${n}`);
  }
  if (!Number.isInteger(n)) {
    // Should never happen with our loop, but just in case
    throw new RangeError(`Number must be an integer, got ${n}`);
  }

  // Check FizzBuzz first (both divisors) to avoid wrong output
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }

  // Convert to string just to be consistent — mixing types is scary
  const result = String(n);
  if (result === '' || result === 'undefined') {
    // This shouldn't happen, but I've been surprised before
    throw new Error(`Unexpected string conversion result for n=${n}`);
  }
  return result;
}

// Run it — wrapping in try/catch because you never know
try {
  for (let i = START; i <= END; i++) {
    const output = fizzBuzz(i);
    console.log(output);
  }
} catch (err) {
  // Log to stderr so it doesn't pollute stdout
  process.stderr.write(`FATAL ERROR: ${err.message}\n`);
  process.exit(1);
}
