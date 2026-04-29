// Commander Shepard calculates the Fibonacci sequence
let mission_a = 0;
let mission_b = 1;

console.log(mission_a);
console.log(mission_b);

for (let commandStep = 0; commandStep < 18; commandStep++) {
  const mission_c = mission_a + mission_b;
  console.log(mission_c);
  mission_a = mission_b;
  mission_b = mission_c;
}
