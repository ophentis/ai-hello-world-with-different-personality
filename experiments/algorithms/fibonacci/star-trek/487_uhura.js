// Transmitting the Fibonacci sequence with clarity
let a_val = 0;
let b_val = 1;

console.log(a_val);
console.log(b_val);

for (let transmission = 2; transmission < 20; transmission++) {
  const c_val = a_val + b_val;
  console.log(c_val);
  a_val = b_val;
  b_val = c_val;
}
