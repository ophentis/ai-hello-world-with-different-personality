// Fibonacci! Fibonacci! Fibonacci! Did you know? Did you know?
// Each number's the sum of the last two! That's amazing! Is it amazing?

let a = 0;
let b = 1;
console.log(a);
for (let i = 1; i < 20; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
