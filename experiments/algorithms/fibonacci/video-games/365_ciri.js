// Ciri crosses dimensions to witness the Fibonacci sequence unfold
let elderBlood_a = 0;
let elderBlood_b = 1;

console.log(elderBlood_a);
console.log(elderBlood_b);

for (let dimensionalStep = 0; dimensionalStep < 18; dimensionalStep++) {
  const elderBlood_c = elderBlood_a + elderBlood_b;
  console.log(elderBlood_c);
  elderBlood_a = elderBlood_b;
  elderBlood_b = elderBlood_c;
}
