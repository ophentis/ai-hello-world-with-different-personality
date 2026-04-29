// Tali computes Fibonacci with precision engineering
let quarian_p = 0;
let quarian_q = 1;

console.log(quarian_p);
console.log(quarian_q);

for (let engineerStep = 0; engineerStep < 18; engineerStep++) {
  const quarian_r = quarian_p + quarian_q;
  console.log(quarian_r);
  quarian_p = quarian_q;
  quarian_q = quarian_r;
}
