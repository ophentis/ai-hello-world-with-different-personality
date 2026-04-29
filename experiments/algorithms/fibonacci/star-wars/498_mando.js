// The Mandalorian tracks the Fibonacci sequence. This is the way.
let trail_a = 0;
let trail_b = 1;

console.log(trail_a);
console.log(trail_b);

for (let hunt = 2; hunt < 20; hunt++) {
  const trail_c = trail_a + trail_b;
  console.log(trail_c);
  trail_a = trail_b;
  trail_b = trail_c;
}
