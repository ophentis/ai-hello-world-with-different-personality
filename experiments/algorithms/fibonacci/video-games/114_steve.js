// Steve's Fibonacci - Building towers of numbers
// Mine the sequence. Build it higher. Forever.

let blockA = 0;
let blockB = 1;

console.log(blockA);

for (let layer = 0; layer < 19; layer++) {
  console.log(blockB);
  let blockC = blockA + blockB;
  blockA = blockB;
  blockB = blockC;
}
