// Cersei: Each step consolidates power in the sequence
let previousPower = 0;
let currentPower = 1;

console.log(previousPower);
for (let move = 1; move < 20; move++) {
  console.log(currentPower);
  const nextPower = previousPower + currentPower;
  previousPower = currentPower;
  currentPower = nextPower;
}
