// FizzBuzz — Overengineering Developer Teaching Edition
//
// Welcome, young developer! Today we learn FizzBuzz.
// But more importantly, we learn ARCHITECTURE.
// This solution is enterprise-grade. You could swap out the divisors at runtime.
// You could add new rules without touching existing logic.
// That's the Open/Closed Principle — open for extension, closed for modification!
// Memorize that. It will serve you well.

// ── Rule System ──────────────────────────────────────────────────────────────
// A "rule" is an object describing: when does this rule apply, and what does it output?
// We store rules in an array so we can add more without changing the loop logic below.
// This is dependency injection! The loop doesn't care WHAT the rules are — just that they exist.

const fizzBuzzRuleSet = [
  {
    // Rule 1: FizzBuzz — fires when the number divides evenly by 15 (i.e., by both 3 and 5)
    // Why 15? Because 3 × 5 = 15 and they share no common factors (LCM = 15)
    label: 'FizzBuzz',
    divisor: 15,
    priority: 1, // Lower number = checked first. CRITICAL: must beat Fizz and Buzz.
  },
  {
    // Rule 2: Fizz — fires when divisible by 3
    label: 'Fizz',
    divisor: 3,
    priority: 2,
  },
  {
    // Rule 3: Buzz — fires when divisible by 5
    label: 'Buzz',
    divisor: 5,
    priority: 3,
  },
];

// Sort rules by priority ascending so we always check in the right order.
// Array.sort() rearranges elements. The comparator (a, b) => a.priority - b.priority
// means "put lower priority numbers first."
const sortedRules = fizzBuzzRuleSet.sort((ruleA, ruleB) => ruleA.priority - ruleB.priority);

// ── Evaluation Engine ─────────────────────────────────────────────────────────
// This function takes a number and the rule set, and returns the correct label.
// By passing the rules in, we could test this function with different rule sets!
// That's called "testability" — a key software engineering virtue.

function evaluateNumber(number, rules) {
  // Iterate over each rule in priority order
  for (const rule of rules) {
    // The modulo operator (%) returns the remainder of division.
    // If remainder is 0, the number divides perfectly — the rule applies!
    if (number % rule.divisor === 0) {
      return rule.label; // Return early — first matching rule wins
    }
  }
  // No rule matched — return the number itself (converted to string for consistency)
  return String(number);
}

// ── Range Generator ───────────────────────────────────────────────────────────
// A generator function lazily produces a sequence of numbers.
// The "function*" syntax and "yield" keyword are advanced concepts —
// but the idea is simple: produce numbers one at a time without storing them all.
// This is memory-efficient for very large ranges (imagine 1 to 1,000,000!).

function* numberRange(start, end) {
  for (let n = start; n <= end; n++) {
    yield n; // "yield" means: here's the next value, pause until asked for more
  }
}

// ── Configuration ─────────────────────────────────────────────────────────────
// These constants define the problem boundaries.
// Named constants are better than "magic numbers" buried in code.

const RANGE_START = 1;
const RANGE_END = 100;

// ── Main Execution ────────────────────────────────────────────────────────────
// Now we tie it all together. Generate numbers 1–100, evaluate each one, print it.

for (const currentNumber of numberRange(RANGE_START, RANGE_END)) {
  const output = evaluateNumber(currentNumber, sortedRules);
  console.log(output);
}

// ── What You Learned ──────────────────────────────────────────────────────────
// - Objects & arrays: grouping related data together
// - Array.sort(): ordering data by a comparator
// - for...of loop: iterating over any iterable (arrays, generators, etc.)
// - Generator functions: lazy sequences with function* and yield
// - The modulo operator %: checking divisibility
// - Separation of concerns: rules, engine, and output are separate pieces
//
// Could this be simpler? Yes. But simpler code doesn't teach you about systems.
// Welcome to software engineering. It's beautiful up here.
