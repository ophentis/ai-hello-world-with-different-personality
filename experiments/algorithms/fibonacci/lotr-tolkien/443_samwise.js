// One foot in front of the other. That's the only way forward.

let leftFoot = 0;
let rightFoot = 1;

console.log(leftFoot);
console.log(rightFoot);

for (let step = 0; step < 18; step++) {
  const nextStep = leftFoot + rightFoot;
  console.log(nextStep);
  leftFoot = rightFoot;
  rightFoot = nextStep;
}
