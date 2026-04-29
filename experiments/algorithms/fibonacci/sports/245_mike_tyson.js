// Intimidating dominance. 20 numbers. Each one a knockout.
let power = 0;
let speed = 1;

console.log(power);
console.log(speed);

for (let round = 0; round < 18; round++) {
  let knockout = power + speed;
  console.log(knockout);
  power = speed;
  speed = knockout;
}
