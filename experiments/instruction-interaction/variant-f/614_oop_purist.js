// FizzBuzz — OOP Purist Teaching Edition
//
// Welcome, student! Today we'll learn FizzBuzz through the lens of
// Object-Oriented Programming (OOP). OOP organizes code into "objects" —
// bundles of data and behavior that model real-world concepts.
// By the end of this tutorial, you'll understand:
//   Classes, objects, encapsulation, and polymorphism — using FizzBuzz as our canvas.

// ── CONCEPT 1: CLASSES AND OBJECTS ──────────────────────────────────────────
// A CLASS is a blueprint. It describes what properties and methods an object will have.
// An OBJECT is an instance of a class — built from that blueprint.
// Example: "Car" is a class. Your specific car is an object (instance of Car).

// ── CONCEPT 2: ENCAPSULATION ─────────────────────────────────────────────────
// Encapsulation means bundling data and methods together inside an object,
// and hiding internal details from the outside world.
// You use the object by calling its methods — you don't need to know HOW they work inside.

// ── CONCEPT 3: POLYMORPHISM ──────────────────────────────────────────────────
// Polymorphism means different objects can respond to the SAME method call differently.
// We'll use this for our FizzBuzz rules — each rule object responds to the same interface.

// ─────────────────────────────────────────────────────────────────────────────
// CLASS: FizzBuzzRule
// Represents a single evaluation rule: a divisor and the label to return.
// ─────────────────────────────────────────────────────────────────────────────

class FizzBuzzRule {
  /**
   * Creates a new FizzBuzz rule.
   * @param {number} divisor - The number to check divisibility against.
   * @param {string} label - The string to output when the rule matches.
   */
  constructor(divisor, label) {
    // "this" refers to the object being created.
    // We store the divisor and label as properties of this object.
    this.divisor = divisor;  // e.g., 3 for Fizz, 5 for Buzz
    this.label = label;       // e.g., "Fizz", "Buzz", "FizzBuzz"
  }

  /**
   * Checks whether this rule applies to the given number.
   * The modulo operator (%) gives the remainder after division.
   * If remainder === 0, the number divides evenly — the rule applies.
   * @param {number} number - The number to evaluate.
   * @returns {boolean} True if the rule applies.
   */
  matches(number) {
    return number % this.divisor === 0;
    // Example: rule.divisor = 3, number = 9 → 9 % 3 = 0 → returns true
  }

  /**
   * Returns the label for this rule.
   * @returns {string} The label string.
   */
  getLabel() {
    return this.label;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CLASS: FizzBuzzEvaluator
// Holds a prioritized list of rules and evaluates numbers against them.
// This class ENCAPSULATES the evaluation logic.
// ─────────────────────────────────────────────────────────────────────────────

class FizzBuzzEvaluator {
  /**
   * Creates a new evaluator with an ordered array of rules.
   * Rules are checked in the order they are provided — FIRST match wins.
   * IMPORTANT: The FizzBuzz rule (divisor 15) MUST come before Fizz (3) and Buzz (5).
   * Why? Because 15 is divisible by both 3 and 5 — without priority, 15 would match
   * the Fizz rule first and incorrectly return "Fizz" instead of "FizzBuzz".
   * @param {FizzBuzzRule[]} rules - Array of rules in priority order.
   */
  constructor(rules) {
    this.rules = rules; // Store the rules list as a property
  }

  /**
   * Evaluates a number and returns the appropriate label.
   * Iterates through rules in order; returns the label of the first matching rule.
   * If no rule matches, returns the number as a string.
   * @param {number} number - The number to evaluate.
   * @returns {string} The FizzBuzz label for this number.
   */
  evaluate(number) {
    // this.rules.find() iterates and returns the first rule where matches() is true
    const matchingRule = this.rules.find(rule => rule.matches(number));

    if (matchingRule) {
      return matchingRule.getLabel(); // Use the matched rule's label
    }

    // No rule matched — return the number itself as a string
    return String(number);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CLASS: FizzBuzzGame
// Orchestrates the overall game: holds an evaluator and runs through a range.
// This is the "main" object — it coordinates the other objects.
// ─────────────────────────────────────────────────────────────────────────────

class FizzBuzzGame {
  /**
   * @param {FizzBuzzEvaluator} evaluator - The evaluator to use for labeling numbers.
   * @param {number} start - The starting number (inclusive).
   * @param {number} end - The ending number (inclusive).
   */
  constructor(evaluator, start, end) {
    this.evaluator = evaluator;
    this.start = start;
    this.end = end;
  }

  /**
   * Runs the game: evaluates each number from start to end and prints the result.
   * The for loop counts from this.start to this.end, incrementing by 1 each step.
   */
  play() {
    for (let number = this.start; number <= this.end; number++) {
      const label = this.evaluator.evaluate(number);
      console.log(label); // Print the label to the terminal
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SETUP: Create the objects and wire them together
// ─────────────────────────────────────────────────────────────────────────────

// Create individual rule objects (instances of FizzBuzzRule)
// NOTE the order: FizzBuzz (15) MUST come first — see the comment in FizzBuzzEvaluator
const fizzBuzzRule = new FizzBuzzRule(15, 'FizzBuzz'); // Check 15 first — most specific
const fizzRule     = new FizzBuzzRule(3,  'Fizz');     // Check 3 second
const buzzRule     = new FizzBuzzRule(5,  'Buzz');     // Check 5 third

// Create the evaluator with rules in priority order
const evaluator = new FizzBuzzEvaluator([fizzBuzzRule, fizzRule, buzzRule]);

// Create the game object with our evaluator and the range 1–100
const game = new FizzBuzzGame(evaluator, 1, 100);

// ─────────────────────────────────────────────────────────────────────────────
// RUN: Play the game!
// ─────────────────────────────────────────────────────────────────────────────

game.play();

// ── WHAT YOU LEARNED ──────────────────────────────────────────────────────────
// - Class: a blueprint for creating objects
// - Constructor: the method that initializes a new object (runs when you call "new")
// - "this": refers to the current object instance
// - Methods: functions attached to a class (matches, getLabel, evaluate, play)
// - Encapsulation: each class hides its internals and exposes a clean interface
// - Polymorphism: FizzBuzzRule objects all respond to matches() and getLabel()
//   differently based on their data — same interface, different behavior
// - Composition: FizzBuzzGame uses a FizzBuzzEvaluator which uses FizzBuzzRules
//   Objects are assembled from other objects — that's composition!
//
// OOP gives us a way to model problems as interacting objects.
// For FizzBuzz it's a bit of a heavy hammer — but now you know how to hold it.
