// MECHANICAL RESONANCE: Fibonacci vibration frequency analysis
// 20 modes. Damping ratio: Optimal. Bearing life: Extended.
// Vibration: Acceptable. CNC program: Running.

let freq_a = 0;
let freq_b = 1;
let mode = 0;

while (mode < 20) {
  console.log(freq_a);
  const freq_c = freq_a + freq_b;
  freq_a = freq_b;
  freq_b = freq_c;
  mode++;
}
