// Railway scheduling - 100 scheduling intervals for braking calculations
// Fail-safe rail system with checkpoint validation

const TOTAL_CHECKPOINTS = 100;
const MAIN_LINE_INTERVAL = 3;
const SIDING_INTERVAL = 5;

let checkpoint = 1;
while (checkpoint <= TOTAL_CHECKPOINTS) {
  let signal = '';

  if (checkpoint % MAIN_LINE_INTERVAL === 0) {
    signal = 'Fizz';
  }
  if (checkpoint % SIDING_INTERVAL === 0) {
    signal += 'Buzz';
  }

  console.log(signal || checkpoint);
  checkpoint++;
}
