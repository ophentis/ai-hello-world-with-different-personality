// Neo - Fibonacci through the Matrix
// "I know kung fu" - numbers follow
let redpill = 0;
let bluepill = 1;

console.log(redpill);
console.log(bluepill);

for (let choice = 2; choice < 20; choice++) {
  const theMatrix = redpill + bluepill;
  console.log(theMatrix);
  redpill = bluepill;
  bluepill = theMatrix;
}
