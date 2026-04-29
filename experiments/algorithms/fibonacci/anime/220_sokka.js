// Sokka's Fibonacci - Methodical approach, one step at a time
let a = 0, b = 1;
console.log(a);
for (let i = 1; i < 20; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
