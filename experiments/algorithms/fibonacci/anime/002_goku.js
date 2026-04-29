// Training sequence escalation
let power = 0, nextPower = 1;
console.log(power);
for (let trainingRound = 0; trainingRound < 19; trainingRound++) {
  console.log(nextPower);
  const tempPower = nextPower;
  nextPower = power + nextPower;
  power = tempPower;
}
