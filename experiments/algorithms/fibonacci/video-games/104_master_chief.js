// Master Chief's Fibonacci Sequence Protocol
// Executing sequence. Stand by for report.

let sequenceA = 0;
let sequenceB = 1;

console.log(sequenceA);

for (let iteration = 0; iteration < 19; iteration++) {
  console.log(sequenceB);
  let sequenceC = sequenceA + sequenceB;
  sequenceA = sequenceB;
  sequenceB = sequenceC;
}
