// Bite my shiny metal Fibonacci! Stolen cigars not included.
let f0 = 0, f1 = 1;
console.log(f0);
console.log(f1);
for (let i = 2; i < 20; i++) {
  const f2 = f0 + f1;
  console.log(f2);
  f0 = f1;
  f1 = f2;
}
