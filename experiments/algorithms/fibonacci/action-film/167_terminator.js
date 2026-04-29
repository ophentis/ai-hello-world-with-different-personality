// Terminator - Fibonacci attack sequence
// Relentless progression
let t1000 = 0;
let t800 = 1;

console.log(t1000);
console.log(t800);

for (let mission = 2; mission < 20; mission++) {
  const assault = t1000 + t800;
  console.log(assault);
  t1000 = t800;
  t800 = assault;
}
