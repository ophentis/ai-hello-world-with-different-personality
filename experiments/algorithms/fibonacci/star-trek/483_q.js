// The Fibonacci sequence - endlessly recursive, yet finite
// Observe as Q computes numbers without breaking a sweat

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < 20; i++) {
  const c = a + b;
  console.log(c);
  a = b;
  b = c;
}

// *materializes elsewhere out of boredom*
