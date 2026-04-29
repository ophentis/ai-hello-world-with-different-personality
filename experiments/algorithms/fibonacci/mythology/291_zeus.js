// Divine power multiplies through generations - Fibonacci growth in Olympus
// Each god begets new titans

let priorGods = 0;
let currentTitans = 1;

for (let generation = 0; generation < 20; generation++) {
  console.log(priorGods);
  const nextGeneration = priorGods + currentTitans;
  priorGods = currentTitans;
  currentTitans = nextGeneration;
}
