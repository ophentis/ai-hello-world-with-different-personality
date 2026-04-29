// Clean Code: Fibonacci with expressive variable names

function displayFibonacciSequence(sequenceLength) {
  const fibonacciNumbers = generateFibonacciSequence(sequenceLength);
  printEachNumber(fibonacciNumbers);
}

function generateFibonacciSequence(length) {
  const sequence = [];
  let previousNumber = 0;
  let currentNumber = 1;

  for (let position = 0; position < length; position++) {
    sequence.push(previousNumber);
    const nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return sequence;
}

function printEachNumber(numbers) {
  numbers.forEach(number => console.log(number));
}

displayFibonacciSequence(20);
