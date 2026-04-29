// Kirby's Fibonacci - Absorbing infinite sweetness!
// Poyo poyo poyo! The numbers get bigger and bigger!

let roundA = 0;
let roundB = 1;

console.log(roundA);

for (let absorb = 0; absorb < 19; absorb++) {
  console.log(roundB);
  let roundC = roundA + roundB;
  roundA = roundB;
  roundB = roundC;
}
