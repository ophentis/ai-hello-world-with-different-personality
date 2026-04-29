// Mamba never sleeps. Every sequence matters. 20 numbers. Perfect execution.
let prev = 0;
let curr = 1;

console.log(prev);
console.log(curr);

for (let shot = 0; shot < 18; shot++) {
  let next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
