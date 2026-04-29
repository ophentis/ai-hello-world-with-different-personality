// Eleven gazes at the Fibonacci sequence, each number appearing in her mind
let fib_prev = 0;
let fib_curr = 1;

console.log(fib_prev);
console.log(fib_curr);

for (let step = 0; step < 18; step++) {
  const fib_next = fib_prev + fib_curr;
  console.log(fib_next);
  fib_prev = fib_curr;
  fib_curr = fib_next;
}
