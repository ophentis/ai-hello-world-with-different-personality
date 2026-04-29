// Dustin excitedly discovers the Fibonacci pattern!
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let index = 0; index < 18; index++) {
  const nextNum = num1 + num2;
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
}
