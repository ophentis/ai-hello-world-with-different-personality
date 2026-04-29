// MULAN: Build strength generation by generation, like ancestors before us.
let prev = 0, curr = 1;
console.log(prev);
for (let generation = 1; generation < 20; generation++) {
  console.log(curr);
  [prev, curr] = [curr, prev + curr];
}
