// PROBABILITY CALCULATION: Fibonacci sequence for assassination pattern analysis
// Meatbag elimination frequency distribution model

let killCount = 0;
let previousEliminations = 0;
let currentEliminations = 1;

while (killCount < 20) {
  console.log(previousEliminations);
  const nextEliminations = previousEliminations + currentEliminations;
  previousEliminations = currentEliminations;
  currentEliminations = nextEliminations;
  killCount++;
}
