// Guts' Fibonacci - Survival through relentless repetition
let strength = 0, nextStrength = 1;
console.log(strength);
for (let cycle = 1; cycle < 20; cycle++) {
  console.log(nextStrength);
  const temp = nextStrength;
  nextStrength = strength + nextStrength;
  strength = temp;
}
