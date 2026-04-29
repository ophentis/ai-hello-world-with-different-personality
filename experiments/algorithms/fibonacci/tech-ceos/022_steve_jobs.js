// Steve Jobs: Simple. Elegant. Perfect.
let a = 0, b = 1;
console.log(a);
for (let i = 1; i < 20; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
