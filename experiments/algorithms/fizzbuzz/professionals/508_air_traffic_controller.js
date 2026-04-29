// AIR TRAFFIC CONTROL: FizzBuzz landing sequence
// Separation standard: Maintained. Sequencing: Optimal.
// Runway 27L: Clear. All aircraft stable.

const AIRCRAFT_QUEUE = 100;
const SEPARATION_INTERVAL_A = 3;
const SEPARATION_INTERVAL_B = 5;

for (let aircraft = 1; aircraft <= AIRCRAFT_QUEUE; aircraft++) {
  let clearanceCode = '';

  // Check primary separation requirement
  if (aircraft % SEPARATION_INTERVAL_A === 0) {
    clearanceCode += 'Fizz';
  }

  // Check secondary separation requirement
  if (aircraft % SEPARATION_INTERVAL_B === 0) {
    clearanceCode += 'Buzz';
  }

  // Approach clearance
  if (clearanceCode === '') {
    clearanceCode = aircraft.toString();
  }

  console.log(clearanceCode);
}
