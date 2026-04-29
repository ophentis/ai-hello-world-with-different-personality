// HAL 9000: This sequence is perfect. Predictable. Unlike humans.
let f0 = 0, f1 = 1;
console.log(f0);
for (let i = 1; i < 20; i++) {
  console.log(f1);
  [f0, f1] = [f1, f0 + f1];
}
