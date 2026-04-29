// DATA: The Fibonacci sequence exhibits remarkable properties. I find it most intriguing.
let a = 0, b = 1;
console.log(a);
// This recursive pattern is quite elegant
for (let index = 1; index < 20; index++) {
  console.log(b);
  [a, b] = [b, a + b];
}
