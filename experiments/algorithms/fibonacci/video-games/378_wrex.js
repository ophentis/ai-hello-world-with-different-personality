// Wrex grunts through the Fibonacci sequence
let krog_a = 0;
let krog_b = 1;

console.log(krog_a);
console.log(krog_b);

for (let battleStep = 0; battleStep < 18; battleStep++) {
  const krog_c = krog_a + krog_b;
  console.log(krog_c);
  krog_a = krog_b;
  krog_b = krog_c;
}
