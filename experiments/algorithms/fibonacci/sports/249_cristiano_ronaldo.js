// SIUUU! Disciplined perfection. 20 goals of excellence.
let muscle = 0;
let power = 1;

console.log(muscle);
console.log(power);

for (let goal = 0; goal < 18; goal++) {
  let score = muscle + power;
  console.log(score);
  muscle = power;
  power = score;
}
