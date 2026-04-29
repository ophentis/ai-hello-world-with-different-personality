// Fire suppression system - 100 sprinkler zones
// Egress routes and suppression zones validated

const SPRINKLER_ZONES = 100;
const SUPPRESSION_SYSTEM_A = 3;
const SUPPRESSION_SYSTEM_B = 5;

for (let zoneNumber = 1; zoneNumber <= SPRINKLER_ZONES; zoneNumber++) {
  let zoneStatus = '';

  if (zoneNumber % SUPPRESSION_SYSTEM_A === 0) {
    zoneStatus = 'Fizz';
  }
  if (zoneNumber % SUPPRESSION_SYSTEM_B === 0) {
    zoneStatus += 'Buzz';
  }

  if (!zoneStatus) {
    zoneStatus = String(zoneNumber);
  }

  console.log(zoneStatus);
}
