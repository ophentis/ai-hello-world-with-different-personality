// Harmonic series - Fibonacci overtone relationships in acoustics
// 20 harmonic intervals for resonance analysis

let harmonic_f0 = 0, harmonic_f1 = 1;

console.log(harmonic_f0);

for (let harmonic = 1; harmonic < 20; harmonic++) {
  console.log(harmonic_f1);
  const harmonic_f2 = harmonic_f0 + harmonic_f1;
  harmonic_f0 = harmonic_f1;
  harmonic_f1 = harmonic_f2;
}
