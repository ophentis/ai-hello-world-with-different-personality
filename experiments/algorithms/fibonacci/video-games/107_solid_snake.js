// Solid Snake's Fibonacci Infiltration
// Moving through the sequence undetected. Stealth protocol engaged.

let serpentA = 0;
let serpentB = 1;

console.log(serpentA);

for (let mission = 0; mission < 19; mission++) {
  console.log(serpentB);
  let serpentC = serpentA + serpentB;
  serpentA = serpentB;
  serpentB = serpentC;
}
