// Like, this Fibonacci thing is cool. I'm a simple guy from the 31st century.
let num1 = 0, num2 = 1;
console.log(num1);
console.log(num2);
for (let i = 2; i < 20; i++) {
  const num3 = num1 + num2;
  console.log(num3);
  num1 = num2;
  num2 = num3;
}
