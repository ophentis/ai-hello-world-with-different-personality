// The Fibonacci sequence unfolds with the inevitability of prophecy

let priorNumber = 0;
let currentNumber = 1;

console.log(priorNumber);
console.log(currentNumber);

for (let count = 0; count < 18; count++) {
  const nextNumber = priorNumber + currentNumber;
  console.log(nextNumber);
  priorNumber = currentNumber;
  currentNumber = nextNumber;
}
