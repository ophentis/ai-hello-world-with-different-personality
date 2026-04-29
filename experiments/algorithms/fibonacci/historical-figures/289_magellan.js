// The circumnavigation completes - each voyage generation builds on exploration
// Fibonacci growth across the oceans

let previousVoyages = 0;
let currentFleet = 1;

for (let voyage = 0; voyage < 20; voyage++) {
  console.log(previousVoyages);
  const nextFleet = previousVoyages + currentFleet;
  previousVoyages = currentFleet;
  currentFleet = nextFleet;
}
