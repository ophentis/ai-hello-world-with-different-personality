// Poe pushes the Fibonacci sequence to the limits
let num_a = 0;
let num_b = 1;

console.log(num_a);
console.log(num_b);

for (let run = 2; run < 20; run++) {
  const num_c = num_a + num_b;
  console.log(num_c);
  num_a = num_b;
  num_b = num_c;
}
