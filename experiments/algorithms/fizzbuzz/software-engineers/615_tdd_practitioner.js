// FizzBuzz - test-driven approach with assertions

function assertFizzBuzz(input, expected) {
  const result = fizzBuzzValue(input);
  if (result !== expected) {
    throw new Error(`Expected ${expected}, got ${result} for input ${input}`);
  }
}

function fizzBuzzValue(n) {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

function runTests() {
  assertFizzBuzz(1, '1');
  assertFizzBuzz(3, 'Fizz');
  assertFizzBuzz(5, 'Buzz');
  assertFizzBuzz(15, 'FizzBuzz');
}

function executeWithTests() {
  runTests();
  for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzzValue(i));
  }
}

executeWithTests();
