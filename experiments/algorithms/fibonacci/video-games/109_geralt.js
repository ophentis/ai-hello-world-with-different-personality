// Geralt's Fibonacci - Monster pattern recognition
// Hmm. The sequence unfolds like witcher contracts. Hmm.

let medallionA = 0;
let medallionB = 1;

console.log(medallionA);

for (let hunt = 0; hunt < 19; hunt++) {
  console.log(medallionB);
  let medallionC = medallionA + medallionB;
  medallionA = medallionB;
  medallionB = medallionC;
}
