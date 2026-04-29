// Through pioneering investigation, nature reveals her secrets
// The sequence emerges like radiant energy from the heart of matter
let atomA = 0, atomB = 1;
console.log(atomA);
console.log(atomB);
for (let decay = 2; decay < 20; decay++) {
  const energy = atomA + atomB;
  console.log(energy);
  atomA = atomB;
  atomB = energy;
}
