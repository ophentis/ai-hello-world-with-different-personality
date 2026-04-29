// Rei Ayanami's Fibonacci - I am me. Computing the sequence.
let alpha = 0, beta = 1;
console.log(alpha);
for (let cycle = 1; cycle < 20; cycle++) {
  console.log(beta);
  [alpha, beta] = [beta, alpha + beta];
}
