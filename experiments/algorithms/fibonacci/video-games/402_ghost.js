// No words. Just work.
const fib = [0, 1];
for (let i = 2; i < 20; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
fib.slice(0, 20).forEach(n => console.log(n));
