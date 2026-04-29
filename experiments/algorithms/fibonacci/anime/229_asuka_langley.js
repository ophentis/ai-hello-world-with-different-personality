// Asuka Langley's Fibonacci - I'm the best at computing sequences!
let num1 = 0, num2 = 1;
console.log(num1);
for (let rank = 1; rank < 20; rank++) {
  console.log(num2);
  [num1, num2] = [num2, num1 + num2];
}
