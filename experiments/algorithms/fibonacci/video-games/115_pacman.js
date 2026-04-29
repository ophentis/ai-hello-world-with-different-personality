// Pac-Man's Fibonacci - Eating pellets that grow!
// Wakka wakka wakka! Chomp chomp chomp!

let wakaA = 0;
let wakaB = 1;

console.log(wakaA);

for (let munch = 0; munch < 19; munch++) {
  console.log(wakaB);
  let wakaC = wakaA + wakaB;
  wakaA = wakaB;
  wakaB = wakaC;
}
