// Flight computer avionics - critical system, fail-safe redundancy
// Navigation algorithms must be deterministic and fully certified

const SYSTEM_CYCLES = 100;
const PRIMARY_FREQUENCY = 3;
const SECONDARY_FREQUENCY = 5;

for (let altimeterReading = 1; altimeterReading <= SYSTEM_CYCLES; altimeterReading++) {
  let signalOutput = '';

  if (altimeterReading % PRIMARY_FREQUENCY === 0) {
    signalOutput += 'Fizz';
  }
  if (altimeterReading % SECONDARY_FREQUENCY === 0) {
    signalOutput += 'Buzz';
  }

  if (signalOutput === '') {
    signalOutput = String(altimeterReading);
  }

  console.log(signalOutput);
}
