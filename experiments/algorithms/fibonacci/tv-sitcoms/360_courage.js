// Courage counts the Fibonacci sequence with shaky courage
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 0; i < 18; i++) {
  const next = a + b;
  console.log(next);
  a = b;
  b = next;
}
