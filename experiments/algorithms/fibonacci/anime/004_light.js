// Light's calculated sequence
const fib = [0, 1];
for (let i = 2; i < 20; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
fib.forEach(x => console.log(x));
