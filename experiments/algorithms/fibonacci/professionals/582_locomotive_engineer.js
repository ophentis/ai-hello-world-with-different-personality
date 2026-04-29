// Track geometry - Fibonacci spacing in rail sleeper calculations
// 20 intervals for smooth coupling curves

let sleeper_a = 0;
let sleeper_b = 1;

console.log(sleeper_a);

for (let interval = 1; interval < 20; interval++) {
  console.log(sleeper_b);
  const next_sleeper = sleeper_a + sleeper_b;
  sleeper_a = sleeper_b;
  sleeper_b = next_sleeper;
}
