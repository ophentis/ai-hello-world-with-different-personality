// All is number. 20 sequences of mystical harmony and proportion.
let angle = 0;
let side = 1;

console.log(angle);
console.log(side);

for (let ratio = 0; ratio < 18; ratio++) {
  let harmony = angle + side;
  console.log(harmony);
  angle = side;
  side = harmony;
}
