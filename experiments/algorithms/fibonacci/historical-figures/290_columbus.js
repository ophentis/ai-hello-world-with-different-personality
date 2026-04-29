// The New World expands - generations of settlement grow Fibonacci
// Each voyage opens paths for more

let previousSettlements = 0;
let newColonies = 1;

for (let colony = 0; colony < 20; colony++) {
  console.log(previousSettlements);
  const nextWave = previousSettlements + newColonies;
  previousSettlements = newColonies;
  newColonies = nextWave;
}
