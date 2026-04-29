// Maritime propulsion - ship's log entry iteration
// Hull integrity maintained through systematic watchkeeping cycles

const LOG_ENTRIES = 100;
const PORTSIDE_CHECK = 3;
const STARBOARD_CHECK = 5;

for (let watchCycle = 1; watchCycle <= LOG_ENTRIES; watchCycle++) {
  let logEntry = '';

  if (watchCycle % PORTSIDE_CHECK === 0) {
    logEntry = 'Fizz';
  }
  if (watchCycle % STARBOARD_CHECK === 0) {
    logEntry += 'Buzz';
  }

  console.log(logEntry === '' ? watchCycle : logEntry);
}
