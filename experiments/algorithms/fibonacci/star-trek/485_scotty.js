// Aye, the engines run on Fibonacci, dinnae ye know
let fib_a = 0;
let fib_b = 1;

console.log(fib_a);
console.log(fib_b);

for (let loop = 2; loop < 20; loop++) {
  const fib_c = fib_a + fib_b;
  console.log(fib_c);
  fib_a = fib_b;
  fib_b = fib_c;
}
