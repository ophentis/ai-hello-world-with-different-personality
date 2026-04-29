// Mewtwo's Fibonacci - Recursive contemplation of existence
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < 20; i++) {
  console.log(fib(i));
}
