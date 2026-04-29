// Bob Ross: Let's make some happy little Fibonacci numbers.

let previousNumber = 0;
let currentNumber = 1;

console.log(previousNumber);
console.log(currentNumber);

for (let brushStroke = 2; brushStroke < 20; brushStroke++) {
  const nextNumber = previousNumber + currentNumber;
  console.log(nextNumber);
  previousNumber = currentNumber;
  currentNumber = nextNumber;
}
