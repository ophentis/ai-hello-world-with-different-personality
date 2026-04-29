// The Fibonacci sequence: stronger and stronger, like a dwarf in battle!

let previousGold = 0;
let currentGold = 1;

console.log(previousGold);
console.log(currentGold);

for (let vein = 0; vein < 18; vein++) {
  const nextGold = previousGold + currentGold;
  console.log(nextGold);
  previousGold = currentGold;
  currentGold = nextGold;
}
