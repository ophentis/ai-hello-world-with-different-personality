// Nikola Tesla: Obsessive precision with alternating current logic
// The frequency of fizz and buzz resonates at harmonic intervals

for (let oscillation = 1; oscillation <= 100; oscillation++) {
  let currentPhase = '';

  // Primary coil: divisibility by three
  if (oscillation % 3 === 0) {
    currentPhase = 'Fizz';
  }

  // Secondary coil: divisibility by five
  if (oscillation % 5 === 0) {
    currentPhase += 'Buzz';
  }

  // If no resonance detected, transmit the frequency
  if (!currentPhase) {
    currentPhase = oscillation;
  }

  console.log(currentPhase);
}
