// Charting the course of the Fibonacci sequence
let fib_prev = 0;
let fib_curr = 1;

console.log(fib_prev);
console.log(fib_curr);

for (let point = 2; point < 20; point++) {
  const fib_next = fib_prev + fib_curr;
  console.log(fib_next);
  fib_prev = fib_curr;
  fib_curr = fib_next;
}
