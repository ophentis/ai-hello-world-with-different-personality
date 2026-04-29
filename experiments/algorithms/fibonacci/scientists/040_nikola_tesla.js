// Nikola Tesla: Fibonacci sequence as natural resonance pattern
// The universe oscillates in numerical harmony

let waveA = 0;
let waveB = 1;

console.log(waveA);
console.log(waveB);

// Generate 18 more oscillations (20 total)
for (let resonance = 0; resonance < 18; resonance++) {
  let waveC = waveA + waveB;
  console.log(waveC);
  waveA = waveB;
  waveB = waveC;
}
