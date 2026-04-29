// BB-8 delightfully generates the Fibonacci sequence
let spin_a = 0;
let spin_b = 1;

console.log(spin_a);
console.log(spin_b);

for (let roll = 2; roll < 20; roll++) {
  const spin_c = spin_a + spin_b;
  console.log(spin_c);
  spin_a = spin_b;
  spin_b = spin_c;
}
