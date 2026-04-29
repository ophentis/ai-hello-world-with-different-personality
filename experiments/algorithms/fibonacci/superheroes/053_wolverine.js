// Wolverine: The Fibonacci sequence. Brutal. Efficient. Mine.
// Don't need your help, bub. I'll do this alone.

let claw = 0;
let fang = 1;

console.log(claw);
console.log(fang);

// Twenty numbers. No complaining.
for (let hunt = 0; hunt < 18; hunt++) {
  let strike = claw + fang;
  console.log(strike);
  claw = fang;
  fang = strike;
}
