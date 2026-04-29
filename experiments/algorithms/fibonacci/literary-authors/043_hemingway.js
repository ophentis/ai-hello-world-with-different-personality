// Ernest Hemingway: Numbers. One after another. Truth.

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 0; i < 18; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
