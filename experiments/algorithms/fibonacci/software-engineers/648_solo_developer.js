// Completely self-contained Fibonacci generator
// No imports, no dependencies, works in isolation

(function() {
  const fib = [];
  for (let i = 0; i < 20; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  fib.forEach(n => console.log(n));
})();
