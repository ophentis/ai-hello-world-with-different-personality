// AEROSPACE FLIGHT CONTROL: FizzBuzz Navigation System
// Safety factor: 4.0 minimum. Emergency procedures: Ready.
// Airspeed: Nominal. Altitude: Target sequence.

const FLIGHT_ITERATIONS = 100;
const ROLL_DIVISOR = 3;
const PITCH_DIVISOR = 5;
const SAFETY_MARGIN = 1.15; // 15% safety factor

for (let flightPhase = 1; flightPhase <= FLIGHT_ITERATIONS; flightPhase++) {
  let flightStatus = '';

  // Roll control check
  if (flightPhase % ROLL_DIVISOR === 0) {
    flightStatus += 'Fizz';
  }

  // Pitch control check
  if (flightPhase % PITCH_DIVISOR === 0) {
    flightStatus += 'Buzz';
  }

  // Cruise status
  if (flightStatus === '') {
    flightStatus = flightPhase.toString();
  }

  console.log(flightStatus);
}
