// Detective Pikachu's Fibonacci Investigation
// *Takes another sip of coffee* The sequence unfolds with remarkable clarity.

let caseA = 0;
let caseB = 1;

console.log(caseA);

for (let investigation = 0; investigation < 19; investigation++) {
  console.log(caseB);
  let caseC = caseA + caseB;
  caseA = caseB;
  caseB = caseC;
}
