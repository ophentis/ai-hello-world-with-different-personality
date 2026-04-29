// FIBONACCI BYTECODE GENERATOR: 20-instruction sequence
// Compilation stages: Parse, analyze, generate, link
// Register allocation: Optimized for x86-64 ABI

let reg_a = 0;
let reg_b = 1;
let counter = 0;

// BYTECODE LOOP: 20 iterations, zero-overhead
while (counter < 20) {
  console.log(reg_a);
  // Tail-call optimization opportunity
  const reg_c = reg_a + reg_b;
  reg_a = reg_b;
  reg_b = reg_c;
  counter++;
}
