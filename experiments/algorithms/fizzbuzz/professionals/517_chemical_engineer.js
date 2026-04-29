// CHEMICAL PROCESS: FizzBuzz reaction yield sequence
// Temperature: Controlled. Pressure: Within limits. Yield: 95%.
// Stoichiometry: Verified. Byproducts: Minimal.

const REACTION_STEPS = 100;
const CATALYST_A = 3;
const CATALYST_B = 5;

for (let stepNo = 1; stepNo <= REACTION_STEPS; stepNo++) {
  let reactionPhase = '';

  // Primary catalyst activation check
  if (stepNo % CATALYST_A === 0) {
    reactionPhase += 'Fizz';
  }

  // Secondary catalyst activation check
  if (stepNo % CATALYST_B === 0) {
    reactionPhase += 'Buzz';
  }

  // Inert phase
  if (reactionPhase === '') {
    reactionPhase = stepNo.toString();
  }

  console.log(reactionPhase);
}
