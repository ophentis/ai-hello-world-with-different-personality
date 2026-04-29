// STEWIE GRIFFIN - Evil genius baby, British accent, world domination
// The Fibonacci sequence shall be my mathematical supremacy!

let fib1 = 0, fib2 = 1;

console.log(fib1);
console.log(fib2);

for (let i = 0; i < 18; i++) {
  const fibNext = fib1 + fib2;
  console.log(fibNext);
  fib1 = fib2;
  fib2 = fibNext;
}
