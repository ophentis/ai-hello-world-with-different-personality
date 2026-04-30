// Thank you for the request! Before writing the implementation, let me
// define what "correct" means. Tests first. Always.
//
// RED → GREEN → REFACTOR
//
// Acceptance criteria (from the spec):
//   fizzBuzz(1)  === "1"
//   fizzBuzz(2)  === "2"
//   fizzBuzz(3)  === "Fizz"
//   fizzBuzz(4)  === "4"
//   fizzBuzz(5)  === "Buzz"
//   fizzBuzz(9)  === "Fizz"
//   fizzBuzz(10) === "Buzz"
//   fizzBuzz(15) === "FizzBuzz"
//   fizzBuzz(30) === "FizzBuzz"
//   fizzBuzz(100) === "Buzz"
//   fizzBuzz(97) === "97"
//   fizzBuzz(98) === "98"
//   fizzBuzz(99) === "Fizz"

// --- IMPLEMENTATION (written to satisfy all tests above) ---

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

// --- INLINE TEST SUITE (run before output) ---
const cases = [
  [1, '1'], [2, '2'], [3, 'Fizz'], [4, '4'], [5, 'Buzz'],
  [9, 'Fizz'], [10, 'Buzz'], [15, 'FizzBuzz'], [30, 'FizzBuzz'],
  [100, 'Buzz'], [97, '97'], [98, '98'], [99, 'Fizz'],
];

let allPassed = true;
for (const [input, expected] of cases) {
  const actual = fizzBuzz(input);
  if (actual !== expected) {
    process.stderr.write(`FAIL: fizzBuzz(${input}) expected "${expected}", got "${actual}"\n`);
    allPassed = false;
  }
}

if (!allPassed) {
  process.stderr.write('Tests failed. Aborting output.\n');
  process.exit(1);
}
// All tests pass. GREEN. Proceeding to output phase.

// --- OUTPUT (1–100) ---
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
