// FizzBuzz — Functional Programmer Teaching Edition
//
// Welcome! Today I'll show you FizzBuzz written in a functional style.
// "Functional programming" is a way of thinking about code as transformations of data,
// rather than sequences of commands. Pure functions, no side effects, composable pieces.
// It's beautiful. Let me show you why.

// ── CONCEPT: PURE FUNCTIONS ─────────────────────────────────────────────────
// A pure function:
//   1. Given the same input, ALWAYS returns the same output
//   2. Has no side effects (doesn't change external state, no console.log inside)
// Pure functions are easy to test, easy to reason about, and composable.
// We'll build FizzBuzz from several small pure functions. Each does one thing.

// ── CONCEPT: THE MODULO OPERATOR ────────────────────────────────────────────
// The % operator: gives remainder after division. The foundation of divisibility checks.
//   15 % 3 = 0  → divisible, no remainder
//   16 % 3 = 1  → not divisible, remainder of 1
// When the result is 0, the number divides evenly. That's all we need.

// ── STEP 1: A FUNCTION TO CHECK DIVISIBILITY ─────────────────────────────────
// Instead of writing (number % 3 === 0) everywhere, we name this idea.
// This is "extracting a predicate" — a function that returns true or false.
// Arrow function syntax: (param) => expression  — short and clean.

const isDivisibleBy = (divisor) => (number) => number % divisor === 0;
// isDivisibleBy is a "curried" function — it takes a divisor and returns a NEW function
// that checks if any given number is divisible by that divisor.
// isDivisibleBy(3) returns a function: (number) => number % 3 === 0
// isDivisibleBy(3)(9) = true  (9 % 3 === 0)
// isDivisibleBy(3)(10) = false (10 % 3 !== 0)

// Create specific divisibility checkers by partially applying isDivisibleBy
const isDivisibleByThree = isDivisibleBy(3);   // Checks: is this number divisible by 3?
const isDivisibleByFive  = isDivisibleBy(5);   // Checks: is this number divisible by 5?
const isDivisibleByFifteen = isDivisibleBy(15); // Checks: is this number divisible by 15?

// ── STEP 2: A FUNCTION TO LABEL A SINGLE NUMBER ──────────────────────────────
// Given a number, return the correct FizzBuzz label.
// Pure function: same input always gives same output.
// Note: we check 15 first (both conditions) before checking 3 or 5 alone.
// This is because 15 is the most specific case — it must win.

const getFizzBuzzLabel = (number) => {
  if (isDivisibleByFifteen(number)) return 'FizzBuzz'; // most specific case first
  if (isDivisibleByThree(number))   return 'Fizz';
  if (isDivisibleByFive(number))    return 'Buzz';
  return String(number); // String() converts the number to text
};

// ── STEP 3: GENERATE THE RANGE OF NUMBERS ────────────────────────────────────
// Array.from() creates an array. { length: 100 } makes a 100-slot template.
// The second argument (_, index) => index + 1 fills each slot with its 1-based index.
// Result: [1, 2, 3, 4, ..., 100]
// Why use an array? Because then we can apply map() — a core functional tool.

const numbersOneToHundred = Array.from({ length: 100 }, (_, index) => index + 1);

// ── STEP 4: TRANSFORM THE ARRAY WITH MAP ──────────────────────────────────────
// Array.map() applies a function to EVERY element and returns a NEW array.
// We transform [1, 2, 3, ...100] into ["1", "2", "Fizz", "4", "Buzz", ...]
// map() does not mutate the original array — pure transformation!

const fizzBuzzLabels = numbersOneToHundred.map(getFizzBuzzLabel);

// ── STEP 5: OUTPUT ────────────────────────────────────────────────────────────
// forEach() runs a function on each element — this is where the "side effect" lives.
// We isolate the impure part (console.log) to this one place.
// Everything else above is pure and testable.

fizzBuzzLabels.forEach((label) => console.log(label));

// ── WHAT YOU LEARNED ──────────────────────────────────────────────────────────
// - Pure functions: predictable, testable, composable
// - Arrow functions: (param) => expression — clean, concise syntax
// - Currying: a function returning a function, enabling partial application
// - Array.from(): generating arrays from a description
// - Array.map(): transforming every element without mutation
// - Array.forEach(): applying a side effect to each element
// - Separating pure logic from side effects
//
// In functional style, we describe WHAT we want, not HOW to do it step by step.
// The loop is gone — replaced by a data pipeline. Welcome to functional thinking.
