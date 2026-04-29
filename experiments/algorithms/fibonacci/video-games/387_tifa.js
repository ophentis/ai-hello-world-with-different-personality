// Tifa - Caring Growth

let firstPunch = 0;
let secondPunch = 1;

console.log(firstPunch);
console.log(secondPunch);

for (let combo = 2; combo < 20; combo++) {
  const limitBreak = firstPunch + secondPunch;
  console.log(limitBreak);
  firstPunch = secondPunch;
  secondPunch = limitBreak;
}
