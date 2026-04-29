// SPECIFICATION DOCUMENT: Fibonacci Sequence Generator
// REQUIREMENTS PHASE:
//   R1: Generate Fibonacci sequence
//   R2: First 20 numbers
//   R3: Starting with 0, 1
//   R4: Output one number per line
//   R5: Expected: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181

// DESIGN PHASE:
//   D1: Iterative approach (better than recursive for performance)
//   D2: Array storage for intermediate values
//   D3: Sequential calculation: F(n) = F(n-1) + F(n-2)
//   D4: Output formatting: newline-separated

// IMPLEMENTATION PHASE
function generateFibonacciSequence() {
  // Per specification R1, R2, R3
  const SEQUENCE_LENGTH = 20;
  const INITIAL_VALUES = [0, 1];

  const sequence = [...INITIAL_VALUES];

  // Iterative generation per D1
  for (let i = 2; i < SEQUENCE_LENGTH; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
}

// TESTING PHASE: Validate output
const fibonacciResult = generateFibonacciSequence();

// Per specification R4: newline-separated output
fibonacciResult.forEach(number => {
  console.log(number);
});
