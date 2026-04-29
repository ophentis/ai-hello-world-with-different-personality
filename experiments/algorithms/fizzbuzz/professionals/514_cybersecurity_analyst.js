// THREAT DETECTION: FizzBuzz intrusion pattern analysis
// Defense-in-depth: Enabled. IDS signature: Active.
// Firewall rules: Restrictive. False positive rate: Minimized.

const THREAT_SCAN_ITERATIONS = 100;
const ATTACK_VECTOR_A = 3;
const ATTACK_VECTOR_B = 5;

for (let packetId = 1; packetId <= THREAT_SCAN_ITERATIONS; packetId++) {
  let threatLevel = '';

  // Primary threat detection signature
  if (packetId % ATTACK_VECTOR_A === 0) {
    threatLevel += 'Fizz';
  }

  // Secondary threat detection signature
  if (packetId % ATTACK_VECTOR_B === 0) {
    threatLevel += 'Buzz';
  }

  // Clean packet - no threat detected
  if (threatLevel === '') {
    threatLevel = packetId.toString();
  }

  console.log(threatLevel);
}
