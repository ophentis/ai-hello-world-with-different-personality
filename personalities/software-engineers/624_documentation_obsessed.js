/**
 * Hello World Application
 *
 * This module demonstrates the classic "Hello World" program.
 * It serves as an entry point to verify the Node.js runtime is functioning correctly.
 *
 * USAGE:
 *   node hello_world.js
 *
 * OUTPUT:
 *   Hello World
 *
 * @author Documentation Obsessed Developer
 * @version 1.0.0
 * @since 2026-04-28
 */

/**
 * Prints the classic greeting to standard output.
 * This function exists to encapsulate the output behavior for future extensibility.
 *
 * @function greet
 * @description Outputs "Hello World" to console using console.log
 * @returns {void} Does not return a value
 * @throws {Error} Will not throw - this is a pure logging operation
 *
 * IMPLEMENTATION NOTES:
 *   - Uses console.log which is the standard output method in Node.js
 *   - Guarantees single line output
 *   - Newline is automatically appended by console.log
 *
 * TESTING:
 *   Execute with: node hello_world.js
 *   Verify output matches: "Hello World\n"
 *
 * @example
 *   greet();
 *   // => outputs "Hello World" to stdout
 */
function greet() {
  console.log('Hello World');
}

greet();
