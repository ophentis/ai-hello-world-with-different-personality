// Cloud Strife's Fibonacci - The weight of destiny
// Numbers accumulate like guilt. Like memories that won't fade.

let firstSorrow = 0;
let secondSorrow = 1;

console.log(firstSorrow);

for (let cycle = 0; cycle < 19; cycle++) {
  console.log(secondSorrow);
  let thirdSorrow = firstSorrow + secondSorrow;
  firstSorrow = secondSorrow;
  secondSorrow = thirdSorrow;
}
