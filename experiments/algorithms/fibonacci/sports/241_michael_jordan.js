// GOAT mentality: build to the peak. One step at a time, unstoppable.
let prev = 0;
let curr = 1;

console.log(prev);
console.log(curr);

for (let round = 0; round < 18; round++) {
  let next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
