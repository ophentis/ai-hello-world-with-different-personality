// Ganondorf - Triforce Hunger Sequence

let power = 0;
let hunger = 1;

console.log(power);
console.log(hunger);

for (let conquest = 2; conquest < 20; conquest++) {
  const darkness = power + hunger;
  console.log(darkness);
  power = hunger;
  hunger = darkness;
}
