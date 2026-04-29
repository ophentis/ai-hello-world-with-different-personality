// SILENT RUNNING: FizzBuzz sonar ping sequence
// Depth: 100 meters. Pressure: Nominal. All systems silent.
// Passive sonar active. Torpedo tube: Primed.

const SONAR_PINGS = 100;
const FREQUENCY_BAND_A = 3;
const FREQUENCY_BAND_B = 5;

for (let depth = 1; depth <= SONAR_PINGS; depth++) {
  let pingSignature = '';

  // Primary sonar frequency check
  if (depth % FREQUENCY_BAND_A === 0) {
    pingSignature += 'Fizz';
  }

  // Secondary sonar frequency check
  if (depth % FREQUENCY_BAND_B === 0) {
    pingSignature += 'Buzz';
  }

  // Background water pressure reading
  if (pingSignature === '') {
    pingSignature = depth.toString();
  }

  console.log(pingSignature);
}
