// [Earnestly taking notes] Fibonacci sequence generation. Mathematical precision required. Extreme focus.
let f0 = 0, f1 = 1;
console.log(f0);
for (let iteration = 1; iteration < 20; iteration++) {
  console.log(f1);
  const nextVal = f0 + f1;
  f0 = f1;
  f1 = nextVal;
}
