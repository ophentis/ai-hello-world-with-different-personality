// FizzBuzz Algorithm: A Logical Analysis
// First Law: The algorithm must produce correct output.
// Second Law: The algorithm obeys the constraints of logic.
// Third Law: The algorithm must complete without error.

const MAX_ITERATIONS = 100;
const DIVISOR_A = 3;
const DIVISOR_B = 5;
const STRING_A = "Fizz";
const STRING_B = "Buzz";

for (let iteration = 1; iteration <= MAX_ITERATIONS; iteration++) {
  let result = "";
  if (iteration % DIVISOR_A === 0) result += STRING_A;
  if (iteration % DIVISOR_B === 0) result += STRING_B;
  console.log(result || iteration);
}
