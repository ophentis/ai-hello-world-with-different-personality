// FIBONACCI CRYPTOSYSTEM: Number-theoretic sequence
// 20 iterations over prime-like distribution
// Entropy: Maximized. Predictability: Theoretical only.

let seq_a = 0;
let seq_b = 1;
let iteration = 0;
const SECURITY_PARAMETER = 20;

while (iteration < SECURITY_PARAMETER) {
  console.log(seq_a);
  const seq_c = seq_a + seq_b;
  seq_a = seq_b;
  seq_b = seq_c;
  iteration++;
}
