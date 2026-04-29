// A diplomatic and measured approach. Each number follows the previous with precision.
let rebellion_a = 0, rebellion_b = 1;
console.log(rebellion_a);
for (let count = 0; count < 19; count++) {
  console.log(rebellion_b);
  [rebellion_a, rebellion_b] = [rebellion_b, rebellion_a + rebellion_b];
}
