// Magical touch. Quiet genius. 20 goals of pure beauty.
let dribble = 0;
let assist = 1;

console.log(dribble);
console.log(assist);

for (let play = 0; play < 18; play++) {
  let goal = dribble + assist;
  console.log(goal);
  dribble = assist;
  assist = goal;
}
