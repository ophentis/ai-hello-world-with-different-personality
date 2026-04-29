// I'm competitive. I want the best Fibonacci. Mine is better than yours. Obviously.
let chef_a = 0, chef_b = 1;
console.log(chef_a);
for (let order = 0; order < 19; order++) {
  console.log(chef_b);
  [chef_a, chef_b] = [chef_b, chef_a + chef_b];
}
