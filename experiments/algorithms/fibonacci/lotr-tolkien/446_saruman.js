// The Fibonacci sequence: engineered perfection, growing ever more powerful

let unitA = 0;
let unitB = 1;

console.log(unitA);
console.log(unitB);

for (let generation = 0; generation < 18; generation++) {
  const unitNext = unitA + unitB;
  console.log(unitNext);
  unitA = unitB;
  unitB = unitNext;
}
