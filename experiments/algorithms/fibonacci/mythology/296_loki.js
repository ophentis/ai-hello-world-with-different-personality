// The trickster's chaos multiplies - Fibonacci grows with mischief
// Each trick spawns new tricks

let priorTricks = 0;
let currentChaos = 1;

for (let age = 0; age < 20; age++) {
  console.log(priorTricks);
  const nextChaos = priorTricks + currentChaos;
  priorTricks = currentChaos;
  currentChaos = nextChaos;
}
