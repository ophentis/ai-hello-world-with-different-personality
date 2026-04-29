// Ellie discovers Fibonacci in the wilderness
let survivor_a = 0;
let survivor_b = 1;

console.log(survivor_a);
console.log(survivor_b);

for (let braveStep = 0; braveStep < 18; braveStep++) {
  const survivor_c = survivor_a + survivor_b;
  console.log(survivor_c);
  survivor_a = survivor_b;
  survivor_b = survivor_c;
}
