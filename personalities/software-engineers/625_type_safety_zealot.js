/**
 * @typedef {string} Message
 */

/**
 * Assert that a value is a string
 * @param {any} value
 * @returns {boolean}
 */
function assertString(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected string, got ${typeof value}`);
  }
  return true;
}

/**
 * Assert that a value is not null or undefined
 * @param {any} value
 * @returns {boolean}
 */
function assertNotNull(value) {
  if (value === null || value === undefined) {
    throw new TypeError('Value cannot be null or undefined');
  }
  return true;
}

/**
 * Print a message to console
 * @param {Message} message - The message to print
 * @returns {void}
 */
function printMessage(message) {
  assertNotNull(message);
  assertString(message);

  if (message.length === 0) {
    throw new Error('Message cannot be empty');
  }

  console.log(message);
}

// Construct with type safety
/** @type {Message} */
const greeting = 'Hello World';

// Defensive call
if (typeof greeting === 'string' && greeting.length > 0) {
  printMessage(greeting);
} else {
  throw new Error('Invalid greeting');
}
