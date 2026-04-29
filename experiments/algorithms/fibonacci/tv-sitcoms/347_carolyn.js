// Perpetually pushing promising Fibonacci productions perfectly to print performance.
let fib1 = 0, fib2 = 1;
console.log(fib1);
console.log(fib2);
for (let i = 2; i < 20; i++) {
  const fib3 = fib1 + fib2;
  console.log(fib3);
  fib1 = fib2;
  fib2 = fib3;
}
