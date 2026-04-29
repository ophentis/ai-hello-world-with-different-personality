// Fibonacci - test-driven approach with validation

function assertEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function generateFibonacci(count) {
  const sequence = [];
  let a = 0, b = 1;
  sequence.push(a);

  for (let i = 1; i < count; i++) {
    sequence.push(b);
    [a, b] = [b, a + b];
  }

  return sequence;
}

function testFibonacci() {
  assertEqual(generateFibonacci(1), [0], 'First element');
  assertEqual(generateFibonacci(2), [0, 1], 'First two');
  assertEqual(generateFibonacci(6), [0, 1, 1, 2, 3, 5], 'First six');
}

function runProgram() {
  testFibonacci();
  const sequence = generateFibonacci(20);
  sequence.forEach(num => console.log(num));
}

runProgram();
