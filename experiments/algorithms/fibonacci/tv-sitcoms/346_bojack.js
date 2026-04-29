// I'll mess this up somehow. I always do. Here's your Fibonacci.
let x = 0, y = 1;
console.log(x);
console.log(y);
for (let i = 2; i < 20; i++) {
  const z = x + y;
  console.log(z);
  x = y;
  y = z;
}
