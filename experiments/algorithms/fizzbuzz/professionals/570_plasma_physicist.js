// Plasma Physicist - analyze magnetic confinement cycles
// Cycle 3 (Fizz), Cycle 5 (Buzz) in tokamak operation sequence
const confinementCycles = 100;
for (let cycle = 1; cycle <= confinementCycles; cycle++) {
  let cycleType = '';
  if (cycle % 3 === 0) cycleType += 'Fizz';
  if (cycle % 5 === 0) cycleType += 'Buzz';
  console.log(cycleType || cycle);
}