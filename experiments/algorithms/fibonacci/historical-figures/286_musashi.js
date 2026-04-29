// The way unfolds like Fibonacci - natural, inevitable, balanced
// Water flows according to its nature; numbers too find harmony

let firstStrike = 0;
let secondStrike = 1;

for (let duel = 0; duel < 20; duel++) {
  console.log(firstStrike);
  const thirdStrike = firstStrike + secondStrike;
  firstStrike = secondStrike;
  secondStrike = thirdStrike;
}
