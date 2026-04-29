// Mega Man's Fibonacci - 8-bit Processing
// Power absorbed. Sequence calculated. Systems nominal.

let chipA = 0;
let chipB = 1;

console.log(chipA);

for (let cycle = 0; cycle < 19; cycle++) {
  console.log(chipB);
  let chipC = chipA + chipB;
  chipA = chipB;
  chipB = chipC;
}
