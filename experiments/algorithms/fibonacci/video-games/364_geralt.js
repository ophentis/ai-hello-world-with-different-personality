// Geralt meditates on the Fibonacci sequence, finding the pattern in nature
let prevSequence = 0;
let currSequence = 1;

console.log(prevSequence);
console.log(currSequence);

for (let witcherStep = 0; witcherStep < 18; witcherStep++) {
  const nextSequence = prevSequence + currSequence;
  console.log(nextSequence);
  prevSequence = currSequence;
  currSequence = nextSequence;
}
