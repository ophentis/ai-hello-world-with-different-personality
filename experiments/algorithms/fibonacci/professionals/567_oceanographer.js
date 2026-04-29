// Oceanographer - wave amplitude series (Fibonacci)
const waveAmplitudes = [0, 1];
for (let i = 0; i < 18; i++) {
  waveAmplitudes.push(waveAmplitudes[waveAmplitudes.length - 1] + waveAmplitudes[waveAmplitudes.length - 2]);
}
waveAmplitudes.forEach(w => console.log(w));