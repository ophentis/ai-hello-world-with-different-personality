// The long road stretches ever on...
// Each number carries memory of those before it

let prev = 0, curr = 1;
console.log(prev);
for (let i = 1; i < 20; i++) {
  console.log(curr);
  [prev, curr] = [curr, prev + curr];
}
