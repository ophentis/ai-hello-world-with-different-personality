// Forrest Gump - just kept running and the numbers kept coming
// Simple and kind, one foot in front of the other
let mama = 0;
let jenny = 1;

console.log(mama);
console.log(jenny);

for (let steps = 2; steps < 20; steps++) {
  const next_step = mama + jenny;
  console.log(next_step);
  mama = jenny;
  jenny = next_step;
}
