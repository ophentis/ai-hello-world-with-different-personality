// A gentle sequence, like lily pads across a pond
let prev = 0, curr = 1;
console.log(prev);
for (let i = 1; i < 20; i++) {
  console.log(curr);
  [prev, curr] = [curr, prev + curr];
}
