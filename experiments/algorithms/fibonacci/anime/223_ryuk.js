// Ryuk's Fibonacci - A sequence in a finite world
let f0 = 0, f1 = 1;
console.log(f0);
for (let k = 1; k < 20; k++) {
  console.log(f1);
  const temp = f1;
  f1 = f0 + f1;
  f0 = temp;
}
