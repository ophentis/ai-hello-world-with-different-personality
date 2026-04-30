// FizzBuzz — TDD Practitioner Teaching Edition
//
// Welcome to Test-Driven Development! Today I'll teach you FizzBuzz the TDD way.
// TDD means: write tests FIRST, then write the code to make those tests pass.
// Red → Green → Refactor. That's the cycle. Let's walk through it together.
//
// In a real project you'd use Jest or Mocha. Here, I'll embed lightweight assertions
// so you can see the TDD mindset in pure Node.js without any dependencies.

// ── WHAT IS TDD? ─────────────────────────────────────────────────────────────
// 1. RED:    Write a failing test that describes the behavior you want.
// 2. GREEN:  Write the MINIMUM code to make that test pass.
// 3. REFACTOR: Clean up the code while keeping tests green.
//
// Why? Because tests ARE your specification. They prove your code works.
// And when you have tests, you can change code confidently — tests will catch regressions.

// ── STEP 1: DEFINE OUR ASSERTION HELPER ──────────────────────────────────────
// A simple assertion function: if expected !== actual, throw an error.
// This simulates what a test framework does under the hood.

function assertEqual(testName, actual, expected) {
  if (actual !== expected) {
    throw new Error(`FAILED: ${testName}\n  Expected: ${JSON.stringify(expected)}\n  Actual:   ${JSON.stringify(actual)}`);
  }
  // If we reach here, the test passed — no error thrown
}

// ── STEP 2: WRITE THE TESTS FIRST (RED phase) ────────────────────────────────
// Before writing any implementation, we specify exactly what we expect.
// These tests will FAIL until we implement getFizzBuzzLabel below.
// Note: we call them all together after implementing the function.

// The test cases for getFizzBuzzLabel:
const testCases = [
  // Ordinary numbers (not divisible by 3 or 5)
  { input: 1,   expected: '1',        description: 'returns "1" for 1' },
  { input: 2,   expected: '2',        description: 'returns "2" for 2' },
  { input: 4,   expected: '4',        description: 'returns "4" for 4' },
  { input: 7,   expected: '7',        description: 'returns "7" for 7' },
  // Fizz cases (divisible by 3, not 5)
  { input: 3,   expected: 'Fizz',     description: 'returns "Fizz" for 3' },
  { input: 6,   expected: 'Fizz',     description: 'returns "Fizz" for 6' },
  { input: 9,   expected: 'Fizz',     description: 'returns "Fizz" for 9' },
  // Buzz cases (divisible by 5, not 3)
  { input: 5,   expected: 'Buzz',     description: 'returns "Buzz" for 5' },
  { input: 10,  expected: 'Buzz',     description: 'returns "Buzz" for 10' },
  { input: 25,  expected: 'Buzz',     description: 'returns "Buzz" for 25' },
  // FizzBuzz cases (divisible by both 3 and 5 = divisible by 15)
  // CRITICAL: 15 must return "FizzBuzz", NOT "Fizz" — this test FORCES the right order
  { input: 15,  expected: 'FizzBuzz', description: 'returns "FizzBuzz" for 15 (NOT Fizz!)' },
  { input: 30,  expected: 'FizzBuzz', description: 'returns "FizzBuzz" for 30' },
  { input: 45,  expected: 'FizzBuzz', description: 'returns "FizzBuzz" for 45' },
];

// ── STEP 3: IMPLEMENT THE FUNCTION (GREEN phase) ─────────────────────────────
// Now we write the MINIMUM code to make all tests pass.
// The modulo operator (%) gives the remainder after division.
//   15 % 3 = 0  → divisible by 3 (no remainder)
//   15 % 5 = 0  → divisible by 5 (no remainder)
//   15 % 15 = 0 → divisible by both (check this FIRST or tests for 15 will fail)

const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;
const FIZZBUZZ_DIVISOR = FIZZ_DIVISOR * BUZZ_DIVISOR; // 15

function getFizzBuzzLabel(number) {
  // Check combined case first — tests DEMAND this or the FizzBuzz test cases fail
  if (number % FIZZBUZZ_DIVISOR === 0) return 'FizzBuzz';
  if (number % FIZZ_DIVISOR === 0)     return 'Fizz';
  if (number % BUZZ_DIVISOR === 0)     return 'Buzz';
  return String(number);
}

// ── STEP 4: RUN THE TESTS ─────────────────────────────────────────────────────
// Execute every test case. If any fails, the process throws and we see exactly what broke.
// This is the "Green" check — all should pass with our implementation above.

testCases.forEach(({ input, expected, description }) => {
  assertEqual(description, getFizzBuzzLabel(input), expected);
});

// If we reach here without an error, all tests passed!
// ── ALL TESTS PASSED ─────────────────────────────────────────────────────────

// ── STEP 5: PRODUCE THE OUTPUT (using our tested function) ───────────────────
// Now we use our verified function with confidence — tests proved it works.
// This is TDD's payoff: you're not just hoping the code works, you KNOW it does.

for (let n = 1; n <= 100; n++) {
  console.log(getFizzBuzzLabel(n));
}

// ── WHAT YOU LEARNED ──────────────────────────────────────────────────────────
// - TDD cycle: Red → Green → Refactor
// - Assertion functions: verify expected vs actual outcomes
// - Test cases: tabular specification of required behavior
// - Why tests force correct implementation (the FizzBuzz-before-Fizz ordering)
// - How tested functions give confidence when used in production code
//
// Every time you add a feature from now on: write the test first. Then the code.
// You'll write better software and sleep better at night. TDD is a gift.
