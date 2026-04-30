// FizzBuzz — Clever Developer Teaching Edition
//
// Alright, I'll show you the "clever" way. But I'll also show you WHY it works,
// because cleverness without understanding is just obfuscation.
// The goal: write code that's elegant AND comprehensible. Let's see both at once.

// ── CONCEPT: STRING CONCATENATION TRICK ─────────────────────────────────────
// Here's the neat insight: instead of branching logic, we can BUILD the output string.
// Start with an empty string. Add "Fizz" if divisible by 3. Add "Buzz" if divisible by 5.
// If we added NOTHING, the number itself is the answer.
//
// Why is this clever? It handles FizzBuzz automatically — no special case needed.
// divisible by 3: label = "" + "Fizz" = "Fizz"
// divisible by 5: label = "" + "Buzz" = "Buzz"
// divisible by both: label = "" + "Fizz" + "Buzz" = "FizzBuzz"  ← comes out right!
// divisible by neither: label = "" + "" + "" = "" → use the number instead
//
// That's one fewer condition than the naive approach. That's elegance.

// ── CONCEPT: THE MODULO OPERATOR ────────────────────────────────────────────
// The % operator returns the remainder after division.
//   12 % 3 = 0  → divisible (clean division, nothing leftover)
//   13 % 3 = 1  → not divisible (1 left over)
// We use (number % divisor === 0) to check for clean divisibility.

// ── CONCEPT: THE OR-FALLBACK TRICK ──────────────────────────────────────────
// The || (logical OR) operator returns the first "truthy" value it finds.
// An empty string "" is "falsy" in JavaScript — it evaluates as false.
// So: emptyString || fallbackValue → returns fallbackValue when string is empty.
// We use this to fall back to the number itself when no Fizz/Buzz applied.

// ── NAMED CONSTANTS — because clever code should still be readable ───────────
const FIZZ_DIVISOR = 3;   // The Fizz trigger
const BUZZ_DIVISOR = 5;   // The Buzz trigger
const MAX_COUNT = 100;    // How high we count

// ── THE LOOP ─────────────────────────────────────────────────────────────────
// A for loop: runs from 1 to 100, incrementing by 1 each time.
// i++ means "add 1 to i after this iteration" — shorthand for i = i + 1.

for (let i = 1; i <= MAX_COUNT; i++) {
  // Build the label by concatenating pieces
  // Each piece only gets added if the number is divisible by that divisor
  const fizzPart = (i % FIZZ_DIVISOR === 0) ? 'Fizz' : ''; // "Fizz" or nothing
  const buzzPart = (i % BUZZ_DIVISOR === 0) ? 'Buzz' : ''; // "Buzz" or nothing
  const label = fizzPart + buzzPart; // Concatenate — "" + "" = "", "Fizz" + "" = "Fizz", etc.

  // If label is empty (no fizz, no buzz), fall back to the number itself
  // The || operator returns the right side when the left side is falsy (empty string = falsy)
  console.log(label || i);
}

// ── WHY IS THIS BETTER? ───────────────────────────────────────────────────────
// 1. No special FizzBuzz case — it emerges naturally from concatenation
// 2. Adding a new rule (e.g., "Jazz" for multiples of 7) is trivial: add one line
// 3. The || fallback is idiomatic JavaScript — worth knowing
//
// Is it the most readable approach for an absolute beginner? Maybe not.
// But once you understand it, you'll reach for this pattern often. It's a good one.
// And now you know WHY it works, not just THAT it works. That's the real lesson.
