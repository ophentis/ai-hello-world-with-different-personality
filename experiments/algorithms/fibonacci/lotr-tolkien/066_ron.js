// Fibonacci? Sounds like something Hermione would bang on about
// Right, each number's the last two added together, yeah?

let a = 0, b = 1;
console.log(a);
for (let i = 1; i < 20; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}
