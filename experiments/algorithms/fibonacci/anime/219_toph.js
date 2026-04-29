// I can feel every number moving into place. No eyes needed when you're this great!
let ground_a = 0, ground_b = 1;
console.log(ground_a);
for (let tremor = 1; tremor < 20; tremor++) {
  console.log(ground_b);
  [ground_a, ground_b] = [ground_b, ground_a + ground_b];
}
