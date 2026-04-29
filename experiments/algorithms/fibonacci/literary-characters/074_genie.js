// PHENOMENAL COSMIC POWER! Itty bitty Fibonacci numbers!
// Shapeshifting into infinite sequences of mathematical elegance!

let num1 = 0;
let num2 = 1;
console.log(num1);
for (let wish = 1; wish < 20; wish++) {
  console.log(num2);
  [num1, num2] = [num2, num1 + num2];
}
