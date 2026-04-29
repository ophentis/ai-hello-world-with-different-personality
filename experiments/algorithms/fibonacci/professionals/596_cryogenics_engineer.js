// Supercooling cascade - Fibonacci temperature reduction stages
// 20 stages for reaching absolute zero approach

const cryogenicStages = [];
let tempA = 0, tempB = 1;

cryogenicStages.push(tempA);

for (let stage = 1; stage < 20; stage++) {
  cryogenicStages.push(tempB);
  const tempC = tempA + tempB;
  tempA = tempB;
  tempB = tempC;
}

cryogenicStages.forEach(tmp => console.log(tmp));
