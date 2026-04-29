// Jetpack fuel: money. Payment delivered: results.
let target_a = 0, target_b = 1;
console.log(target_a);
for (let cycle = 0; cycle < 19; cycle++) {
  console.log(target_b);
  [target_a, target_b] = [target_b, target_a + target_b];
}
