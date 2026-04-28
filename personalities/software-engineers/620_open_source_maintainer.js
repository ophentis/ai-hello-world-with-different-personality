/**
 * hello-world - A minimalist greeting library
 * MIT License
 *
 * Copyright (c) 2026 Open Source Maintainer
 *
 * Permission is hereby granted, free of charge...
 */

/**
 * Generates a Hello World message with composable parameters.
 *
 * @param {string} [greeting="Hello"] - The greeting word
 * @param {string} [target="World"] - The target to greet
 * @returns {string} The formatted greeting message
 * @example
 * const msg = createGreeting("Hello", "Node.js");
 * console.log(msg); // "Hello Node.js"
 */
function createGreeting(greeting = "Hello", target = "World") {
  return `${greeting} ${target}`;
}

/**
 * Main module export for use in other projects.
 * See CONTRIBUTING.md for how to contribute.
 */
module.exports = { createGreeting };

/**
 * Version: 1.0.0
 * Semantic Versioning: MAJOR.MINOR.PATCH
 *
 * Breaking changes bump MAJOR
 * New features bump MINOR
 * Bug fixes bump PATCH
 */
const VERSION = "1.0.0";

// CONTRIBUTING: Please maintain JSDoc for all public functions
// and add tests in __tests__/ directory.

const greeting = createGreeting("Hello", "World");
console.log(greeting);
