// Elevator safety inspection - 100 safety codes
// Cables and counterweights checked systematically

const SAFETY_CODES = 100;
const CABLE_CHECK_FREQUENCY = 3;
const COUNTERWEIGHT_FREQUENCY = 5;

(function inspectElevator() {
  for (let code = 1; code <= SAFETY_CODES; code++) {
    let inspection = '';

    if (code % CABLE_CHECK_FREQUENCY === 0) inspection += 'Fizz';
    if (code % COUNTERWEIGHT_FREQUENCY === 0) inspection += 'Buzz';

    console.log(inspection || code);
  }
})();
