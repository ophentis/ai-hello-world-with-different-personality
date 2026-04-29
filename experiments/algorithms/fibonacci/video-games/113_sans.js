// Sans's Fibonacci - Heh heh heh...
// it's a numbers to die for. or live for. whatever floats your boat.

let puns1 = 0;
let puns2 = 1;

console.log(puns1);

for (let joke = 0; joke < 19; joke++) {
  console.log(puns2);
  let puns3 = puns1 + puns2;
  puns1 = puns2;
  puns2 = puns3;
}
