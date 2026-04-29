// DWIGHT SCHRUTE - Beet farmer, "fact:", intense, literal
// FACT: Fibonacci sequence is a mathematical law of nature, like beets.

const fib = [];
let a = 0;
let b = 1;

fib.push(a);
fib.push(b);

for (let i = 2; i < 20; i++) {
  const c = a + b;
  fib.push(c);
  a = b;
  b = c;
}

fib.forEach(n => console.log(n));
