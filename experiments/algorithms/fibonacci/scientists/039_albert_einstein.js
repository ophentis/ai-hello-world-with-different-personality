// Einstein: A beautiful thought experiment - Fibonacci as elegant relative motion

let mass1 = 0;
let mass2 = 1;

console.log(mass1);
console.log(mass2);

for (let timeStep = 2; timeStep < 20; timeStep++) {
  const velocity = mass1 + mass2;
  console.log(velocity);
  mass1 = mass2;
  mass2 = velocity;
}
